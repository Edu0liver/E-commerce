import { container } from "tsyringe"
import { Request, Response } from 'express'
import { ListProductsService } from "./ListProductsService";

class ListProductsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, price } = request.body;
        
        const listProductController = container.resolve(ListProductsService);

        const product = await listProductController.execute({ name, price });

        return response.status(200).json(product)
    }
}

export { ListProductsController }