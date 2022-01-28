import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { CreateOrderService } from './CreateOrderService';

class CreateOrderController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: user_id } = request.user;
        const { product_id } = request.body;

        const createOrderController = container.resolve(CreateOrderService);
        
        await createOrderController.execute({ user_id, product_id });

        return response.status(201).send();
    }
}

export { CreateOrderController }