import { container } from "tsyringe";
import { UsersRepository } from "../../modules/accounts/infra/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ProductsRepository } from "../../modules/products/infra/repositories/ProductsRepository";
import { IProductsRepository } from "../../modules/products/repositories/IProductsRepository";


container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)

container.registerSingleton<IProductsRepository>(
    "ProductsRepository",
    ProductsRepository
)