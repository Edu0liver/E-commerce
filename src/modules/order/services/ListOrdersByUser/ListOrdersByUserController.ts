import { Request, Response } from 'express'
import { container } from 'tsyringe';
import { ListOrdersByUserService } from './ListOrdersByUserService';

class ListOrdersByUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id: user_id } = request.user;

        const listOrdersByUserService = container.resolve(ListOrdersByUserService);

        const orders = await listOrdersByUserService.execute(user_id);

        return response.status(200).json(orders)
    }
}

export { ListOrdersByUserController }