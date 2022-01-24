import express from 'express';
import { CreateUserController } from '../../../../modules/accounts/services/createUser/CreateUserController';

const usersRoutes = express();

const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };