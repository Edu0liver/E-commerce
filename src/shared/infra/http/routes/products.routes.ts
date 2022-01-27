import express from 'express';
import { ensureAdmin } from '../middleware/ensureAdmin';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const productsRoutes = express()

const createProductController = new CreateProductController();

productsRoutes.post("/", ensureAuthenticated, ensureAdmin, createProductController.handle);

export { productsRoutes };