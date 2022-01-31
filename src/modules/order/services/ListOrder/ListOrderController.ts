import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListOrderService } from './ListOrderService';

class ListOrderController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: user_id } = request.user;
        const { product_id } = request.params;

        const listOrderService = container.resolve(ListOrderService);

        const order = await listOrderService.execute({ user_id, product_id });

        return response.status(200).json(order);
    }
}

export { ListOrderController }