import { inject, injectable } from "tsyringe";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { Product } from "../../infra/entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class CreateProductService {
    
    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ){}

    async execute({ name, price, stock, width, height, length, weight, diameter }: ICreateProductDTO): Promise<Product> {
        return await this.productsRepository.create({ name, price, stock, width, height, length, weight, diameter });
    }
}

export { CreateProductService } 