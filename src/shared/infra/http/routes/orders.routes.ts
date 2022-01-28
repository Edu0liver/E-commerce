import express from 'express';
import { CreateOrderController } from '../../../../modules/order/services/CreateOrder/CreateOrderController';
import { ListOrdersByUserController } from '../../../../modules/order/services/ListOrdersByUser/ListOrdersByUserController';

const ordersRoutes = express();

const createOrderController = new CreateOrderController();
const listOrdersByUserController = new ListOrdersByUserController();

ordersRoutes.post("/", createOrderController.handle);
ordersRoutes.get("/show", listOrdersByUserController.handle);

export { ordersRoutes };