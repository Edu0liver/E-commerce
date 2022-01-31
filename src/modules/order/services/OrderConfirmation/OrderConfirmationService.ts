import { inject } from "tsyringe";
import { IUsersRepository } from "../../../accounts/repositories/IUsersRepository";
import { IProductsRepository } from "../../../products/repositories/IProductsRepository";
import { IOrdersRepository } from "../../repositories/IOrdersRepository";
import frete from 'frete';

interface IRequest {
    product_id: string;
    user_id: string;
}

class OrderConfirmationService {
    constructor(
        @inject("OrdersRepository")
        private ordersRepository: IOrdersRepository,
        @inject("ProductsRepository")
        private productsRepository: IProductsRepository,
        @inject("usersRepository")
        private usersRepository: IUsersRepository,
    ){}

    async execute({ product_id, user_id }: IRequest): Promise<string> {
        const user = await this.usersRepository.findById(user_id);
        const product = await this.productsRepository.findById(product_id);

        if(!user){
            throw new Error("User not found");
        }

        if(!product){
            throw new Error("Product not found");
        }

        if(product.stock <= 0 ){
            throw new Error("Sold out product !");
        }

        const currentStock = product.stock;
        product.stock = currentStock - 1;
        
        const fare: number = await frete()
        .cepOrigem(user.cep)
        .formato(frete.formatos.caixaPacote)
        .peso(product.weight)
        .comprimento(product.length)
        .altura(product.height)
        .largura(product.width)
        .diametro(product.diameter)
        .maoPropria("N")
        .valorDeclarado(product.price)
        .avisoRecebimento('S')
        .servico(frete.servicos.sedex)
        .preco(user.cep);

        const total = (product.price + fare);

        const order = await this.ordersRepository.listOrder(user.id, product.id)
        await this.ordersRepository.deleteOrder(order.id)

        const message = `Your order is already being prepared,
        the delivery time is within 10 days,
        and the value together with fare is equivalent to ${total}`;

        return message;
    }
}

export { OrderConfirmationService }