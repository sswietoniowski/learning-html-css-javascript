import express, { Express, Request, Response } from 'express';
import cors from 'cors';

import usersRouter from './routes/usersRoutes';

const app: Express = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cors()); // for cross-origin requests

// @ts-ignore
if (import.meta.env.PROD) {
  const port: number = 3001;

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

app.get('/', (_: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API!' });
});

app.use('/api/users', usersRouter);

console.log('Express app created...');

export const viteNodeApp = app;
