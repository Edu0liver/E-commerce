import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { User } from "../../../accounts/infra/entities/User";
import { Product } from "../../../products/infra/entities/Product";

@Entity("orders")
class Order {

    @PrimaryColumn()
    id: string;

    @ManyToOne(()=> User)
    @JoinColumn({ name: "user_id"})
    user: User;

    @Column()
    user_id: string;

    @ManyToOne(()=> Product)
    @JoinColumn({ name: "product_id"})
    product: Product;

    @Column()
    product_id: string;
    
    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Order }