import { inject } from "tsyringe";
import { Product } from "../../infra/entities/Product";
import { IProductsRepository } from "../../repositories/IProductsRepository";

interface IRequest {
    name?: string;
    price?: number;
}

interface IResponse {
    productByName?: Product[];
    productByPrice?: Product[];
}

class ListProductsService {

    constructor(
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository
    ){}

    async execute({ name, price }: IRequest): Promise<IResponse> {
        if(!name && !price){
            throw new Error("Need some information to filter");
        }

        const productByName = await this.productsRepository.findByName(name)
        const productByPrice = await this.productsRepository.findByPrice(price);

        return {
            productByName,
            productByPrice
        };
    }
}

export { ListProductsService }