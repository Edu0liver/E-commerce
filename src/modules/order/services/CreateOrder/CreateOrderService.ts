import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../accounts/repositories/IUsersRepository";
import { IProductsRepository } from "../../../products/repositories/IProductsRepository";
import { ICreateOrderDTO } from "../../dtos/ICreateOrderDTO";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";

@injectable()
class CreateOrderService {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository,
    ){}

    async execute({ user_id, product_id }: ICreateOrderDTO): Promise<void> {
        const user = await this.usersRepository.findById(user_id);
        const product = await this.productsRepository.findById(product_id);

        if(!user){
            throw new Error("User does not exist");
        }
        if(!product){
            throw new Error("Product does not exist");
        }

        await this.ordersRepository.create({ user_id, product_id });
    }
}

export { CreateOrderService }