import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
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
    
    @Column()
    weight: number;

    @Column()
    length: number;

    @Column()
    height: number;

    @Column()
    width: number;

    @Column()
    diameter: number;
    
    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Product }