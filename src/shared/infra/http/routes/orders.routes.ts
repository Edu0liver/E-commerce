import express from 'express';
import { CreateOrderController } from '../../../../modules/order/services/CreateOrder/CreateOrderController';
import { ListOrderController } from '../../../../modules/order/services/ListOrder/ListOrderController';
import { ListOrdersByUserController } from '../../../../modules/order/services/ListOrdersByUser/ListOrdersByUserController';

const ordersRoutes = express();

const createOrderController = new CreateOrderController();
const listOrdersByUserController = new ListOrdersByUserController();
const listOrderController = new ListOrderController();

ordersRoutes.post("/", createOrderController.handle);
ordersRoutes.get("/show", listOrderController.handle);
ordersRoutes.get("/all", listOrdersByUserController.handle);

export { ordersRoutes };