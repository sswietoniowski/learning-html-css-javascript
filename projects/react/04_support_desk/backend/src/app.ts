import express, { Express, Request, Response } from 'express';
import 'colors';
import cors from 'cors';

import usersRouter from './routes/usersRoutes';
import errorHandler from './middleware/errorMiddleware';
import connectDb from './config/db';
import ticketsRouter from './routes/ticketsRoutes';
import helmet from 'helmet';
import listEndpoints from 'express-list-endpoints';

// Connect to database
await connectDb();

const app: Express = express();

app.use(helmet()); // for security
app.use(cors()); // for cross-origin requests
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes
app.get(['/', '/api'], (_: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API!' });
});

app.use('/api/users', usersRouter);
app.use('/api/tickets', ticketsRouter);

app.use(errorHandler); // must be last!

const endpoints = listEndpoints(app);
const routes = endpoints.map((endpoint) => ({
  path: endpoint.path,
  methods: endpoint.methods.join(', '),
}));

console.log('Available endpoints:');
routes.forEach((route) => {
  console.log(`${route.path} [${route.methods}]`);
});

// @ts-ignore
if (import.meta.env.PROD) {
  const port: number = 3001;

  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}

export const viteNodeApp = app;
