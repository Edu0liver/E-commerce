import express from 'express';
import { CreateProductController } from '../../../../modules/products/services/createProduct/CreateProductController';
import { ListAllProductsController } from '../../../../modules/products/services/listAll/ListAllProductsController';
import { ListProductsController } from '../../../../modules/products/services/listProduct/ListProductsController';
import { ensureAdmin } from '../middleware/ensureAdmin';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const productsRoutes = express()

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();
const listAllProductsController = new ListAllProductsController();

productsRoutes.post("/", ensureAuthenticated, ensureAdmin, createProductController.handle);
productsRoutes.get("/filter", listProductsController.handle);
productsRoutes.get("/all", listAllProductsController.handle);

export { productsRoutes };