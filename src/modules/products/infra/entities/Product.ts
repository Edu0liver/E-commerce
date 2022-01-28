import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Order } from '../../../order/infra/entities/Order';

@Entity("products")
class Product {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    stock: number;

    @ManyToOne(() => Order, order => order.products)
    order: Order;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Product }