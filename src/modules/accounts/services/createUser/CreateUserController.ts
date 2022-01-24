import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserService } from "./CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { name, email, password } = request.body

        const createUserService = container.resolve(CreateUserService);

        await createUserService.execute({ email, password, name });

        return response.status(201).send();
    }
}

export { CreateUserController }