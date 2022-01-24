import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

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

    constructor(){
        if(!this.id){
            this.id = uuidV4();
        }
    }
}

export { Product }