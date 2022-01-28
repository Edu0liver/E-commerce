import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
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

    @OneToMany(() => Product, product => product.order)
    products: Product[];

    @Column()
    product_id: string;
    
    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Order }