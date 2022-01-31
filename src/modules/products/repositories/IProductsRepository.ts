import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { Product } from "../infra/entities/Product";


interface IProductsRepository {
    create({ name, price, stock, width, height, length, weight, diameter }: ICreateProductDTO): Promise<Product>;
    findById(id: string): Promise<Product>;
    findByName(name: string): Promise<Product[]>;
    findByPrice(price: number): Promise<Product[]>;
    listAll(): Promise<Product[]>;
}

export { IProductsRepository }