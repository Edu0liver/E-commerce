import express from "express";
import { productsRoutes } from "./products.routes";
import { usersRoutes } from "./users.routes";

const routes = express();

routes.use(usersRoutes);
routes.use(productsRoutes);

export { routes }