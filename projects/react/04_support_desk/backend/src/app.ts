import express, { Express } from 'express';
import cors from 'cors';

const app: Express = express();
app.use(cors());

// @ts-ignore
if (import.meta.env.PROD) {
  const port: number = 3001;

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

console.log('Express app created...');

export const viteNodeApp = app;
