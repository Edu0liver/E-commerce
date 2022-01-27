import express from 'express';
import { CreateProductController } from '../../../../modules/products/services/createProduct/CreateProductController';
import { ListProductsController } from '../../../../modules/products/services/listProduct/ListProductsController';
import { ensureAdmin } from '../middleware/ensureAdmin';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const productsRoutes = express()

const createProductController = new CreateProductController();
const listProductsController = new ListProductsController();

productsRoutes.post("/", ensureAuthenticated, ensureAdmin, createProductController.handle);
productsRoutes.post("/filter", listProductsController.handle);

export { productsRoutes };