import express, { Router } from 'express';
import {
  aboutMe,
  loginUser,
  registerUser,
} from '../controllers/usersController';
import authHandler from '../middleware/authMiddleware';

const usersRouter: Router = express.Router();

usersRouter.post('/', registerUser);
usersRouter.post('/login', loginUser);
usersRouter.get('/me', authHandler, aboutMe);

export default usersRouter;
