import { container } from "tsyringe"
import { OrderConfirmationService } from "./OrderConfirmationService"
import { Request, Response } from "express"

class OrderConfirmationController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { id: user_id } = request.user;
        const { product_id } = request.params;
        
        const orderConfirmationService = container.resolve(OrderConfirmationService)

        const message = await orderConfirmationService.execute({ product_id, user_id });

        return response.status(200).json(message);
    }
}

export { OrderConfirmationController }