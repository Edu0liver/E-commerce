import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { Product } from "../infra/entities/Product";


interface IProductsRepository {
    create({ name, price, stock }: ICreateProductDTO): Promise<Product>;
    findById(id: string): Promise<Product>;
    findByName(name: string): Promise<Product>;
}

export { IProductsRepository }