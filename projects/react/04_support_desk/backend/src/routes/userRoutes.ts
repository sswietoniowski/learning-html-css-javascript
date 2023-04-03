import express, { Router, Request, Response } from 'express';

const usersRouter: Router = express.Router();

usersRouter.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Users', users: [] });
});

usersRouter.post('/', (req: Request, res: Response) => {
  res.status(201).json({ message: 'User created', user: req.body });
});

export default usersRouter;
