import { inject, injectable } from "tsyringe";
import { Product } from "../../infra/entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
class ListAllProductsService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ){}

    async execute(): Promise<Product[]> {
        return await this.productsRepository.listAll();
    }
}

export { ListAllProductsService }