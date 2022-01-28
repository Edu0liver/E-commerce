import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../accounts/repositories/IUsersRepository";
import { Order } from "../../infra/entities/Order";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";

@injectable()
class ListOrdersByUserService {

    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository,
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ){}

    async execute(user_id: string): Promise<Order[]> {
        const user = await this.usersRepository.findById(user_id);

        if(!user){
            throw new Error("User does not exist");
        }

        const orders = await this.ordersRepository.listOrdersByUser(user_id);

        return orders;
    }
}

export { ListOrdersByUserService }