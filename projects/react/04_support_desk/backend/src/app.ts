import express, { Express, Request, Response } from 'express';
import 'colors';
import cors from 'cors';

import usersRouter from './routes/usersRoutes';
import errorHandler from './middleware/errorMiddleware';
import connectDb from './config/db';

// Connect to database
await connectDb();

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
app.use(errorHandler);

console.log('Express app created...'.cyan.underline);

export const viteNodeApp = app;
