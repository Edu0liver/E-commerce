import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../accounts/repositories/IUsersRepository";
import { IProductsRepository } from "../../../products/repositories/IProductsRepository";
import { Order } from "../../infra/entities/Order";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";

interface IRequest {
    user_id: string;
    product_id: string;
}

@injectable()
class ListOrderService {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("productsRepository")
        private productsRepository: IProductsRepository,
    ){}

    async execute({ user_id, product_id }: IRequest): Promise<Order> {
        const user = this.usersRepository.findById(user_id);
        const product = this.productsRepository.findById(product_id);

        if(!user){
            throw new Error("User not found");
        }

        if(!product){
            throw new Error("Product not found");
        }

        const order = await this.ordersRepository.listOrder(user_id, product_id)

        return order;
    }
}

export { ListOrderService }