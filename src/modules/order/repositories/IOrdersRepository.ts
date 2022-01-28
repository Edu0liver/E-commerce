import { ICreateOrderDTO } from "../dtos/ICreateOrderDTO";
import { Order } from "../infra/entities/Order";


interface IOrdersRepository {
    create({ user_id, product_id }: ICreateOrderDTO): Promise<void>;
    listOrdersByUser(user_id: string): Promise<Order[]>
}

export { IOrdersRepository };