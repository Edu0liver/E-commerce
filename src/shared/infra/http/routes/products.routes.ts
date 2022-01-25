import express from 'express';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const productsRoutes = express()

productsRoutes.post("/", ensureAuthenticated,)

export { productsRoutes };