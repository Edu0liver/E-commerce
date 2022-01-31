import { getRepository, Repository } from "typeorm";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { IProductsRepository } from "../../repositories/IProductsRepository";
import { Product } from "../entities/Product";

class ProductsRepository implements IProductsRepository {

    private repository: Repository<Product>;

    constructor(){
        this.repository = getRepository(Product);
    }
    
    async create({ name, price, stock, width, height, length, weight, diameter }: ICreateProductDTO): Promise<Product> {
        const product = this.repository.create({
            name,
            price,
            stock,
            width,
            height,
            length,
            weight,
            diameter,
        });
        
        await this.repository.save(product);
        
        return product;
    }
    
    async findById(id: string): Promise<Product> {
        return await this.repository.findOne(id);
    }
    
    async findByName(name: string): Promise<Product[]> {
        return await this.repository.find({ name });
    }

    async findByPrice(price: number): Promise<Product[]> {
        return await this.repository.find({ price });
    }

    async listAll(): Promise<Product[]> {
        return await this.repository.find();
    }
}

export { ProductsRepository }