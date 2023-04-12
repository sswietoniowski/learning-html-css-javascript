import express, { Router } from 'express';
import {
  aboutMe,
  loginUser,
  registerUser,
} from '../controllers/usersController';
import protect from '../middleware/authMiddleware';

const usersRouter: Router = express.Router();

usersRouter.post('/', registerUser);
usersRouter.post('/login', loginUser);
usersRouter.get('/me', protect, aboutMe);

export default usersRouter;
