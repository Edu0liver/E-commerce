import express from "express";
import { authenticationRoutes } from "./authenticate.routes";
import { ordersRoutes } from "./orders.routes";
import { productsRoutes } from "./products.routes";
import { usersRoutes } from "./users.routes";

const routes = express();

routes.use("/users", usersRoutes);
routes.use("/products", productsRoutes);
routes.use(authenticationRoutes);
routes.use("/orders", ordersRoutes);

export { routes }