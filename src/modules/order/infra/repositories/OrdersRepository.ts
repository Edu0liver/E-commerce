import { getRepository, Repository } from "typeorm";
import { ICreateOrderDTO } from "../../dtos/ICreateOrderDTO";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";
import { Order } from "../entities/Order";


class OrdersRepository implements IOrdersRepository {

    private repository: Repository<Order>;

    constructor(){
        this.repository = getRepository(Order);
    }
    
    async create({ user_id, product_id }: ICreateOrderDTO): Promise<void> {
        const order = this.repository.create({ user_id, product_id });
        await this.repository.save(order);
    }
    
    async listOrder(user_id: string, product_id: string): Promise<Order> {
        const order = await this.repository.findOne({ user_id, product_id });
        return order;
    }
    
    async listOrdersByUser(user_id: string): Promise<Order[]> {
        const orders = await this.repository.find({ user_id })
        return orders;
    }

    async deleteOrder(order_id: string): Promise<void> {
        await this.repository.delete({ id: order_id })
    }
    
}

export { OrdersRepository }