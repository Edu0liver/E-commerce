import express from 'express';
import { AuthenticateUserController } from '../../../../modules/accounts/services/authenticateUser/AuthenticateUserController';

const authenticationRoutes = express();

const authenticateUserController = new AuthenticateUserController();

authenticationRoutes.post("/session", authenticateUserController.handle);

export { authenticationRoutes };