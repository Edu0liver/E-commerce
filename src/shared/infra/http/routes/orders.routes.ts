import express from 'express';
import { CreateOrderController } from '../../../../modules/order/services/CreateOrder/CreateOrderController';
import { ListOrderController } from '../../../../modules/order/services/ListOrder/ListOrderController';
import { ListOrdersByUserController } from '../../../../modules/order/services/ListOrdersByUser/ListOrdersByUserController';
import { CreateProductController } from '../../../../modules/products/services/createProduct/CreateProductController';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const ordersRoutes = express();

const createOrderController = new CreateOrderController();
const listOrdersByUserController = new ListOrdersByUserController();
const listOrderController = new ListOrderController();
const createProductController = new CreateProductController();

ordersRoutes.post("/", ensureAuthenticated, createOrderController.handle);
ordersRoutes.post("/confirm", ensureAuthenticated, createProductController.handle);
ordersRoutes.get("/show", ensureAuthenticated, listOrderController.handle);
ordersRoutes.get("/all", ensureAuthenticated, listOrdersByUserController.handle);

export { ordersRoutes };