import express, { Router, Request, Response } from 'express';
import { loginUser, registerUser } from '../controllers/usersController';

const usersRouter: Router = express.Router();

usersRouter.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Users', users: [] });
});

usersRouter.post('/', registerUser);

usersRouter.post('/login', loginUser);

export default usersRouter;
