import express, { Router } from 'express';
import { loginUser, registerUser } from '../controllers/usersController';

const usersRouter: Router = express.Router();

usersRouter.post('/', registerUser);

usersRouter.post('/login', loginUser);

export default usersRouter;
