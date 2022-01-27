import { container } from "tsyringe"
import { ListAllProductsService } from "./ListAllProductsService"
import { Request, Response } from 'express'

class ListAllProductsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllProductsService = container.resolve(ListAllProductsService);

        const products = await listAllProductsService.execute();

        return response.status(200).json(products);
    }
}

export { ListAllProductsController }