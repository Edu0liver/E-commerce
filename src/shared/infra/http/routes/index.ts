import express from "express";
import { authenticationRoutes } from "./authenticate.routes";
import { productsRoutes } from "./products.routes";
import { usersRoutes } from "./users.routes";

const routes = express();

routes.use(usersRoutes);
routes.use(productsRoutes);
routes.use(authenticationRoutes);

export { routes }