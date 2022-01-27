import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { Product } from "../entities/Product";

class ProductsRepository implements IProductsRepository {

    private repository: Repository<Product>;

    constructor(){
        this.repository = getRepository(Product);
    }
    
    async create({ name, price, stock }: ICreateProductDTO): Promise<void> {
        const product = this.repository.create({
            name,
            price,
            stock
        });

        await this.repository.save(product);
    }

    async findById(id: string): Promise<Product> {
        return await this.repository.findOne(id);
    }
    
    async findByName(name: string): Promise<Product> {
        return await this.repository.findOne(name);
    }
}

export { ProductsRepository }