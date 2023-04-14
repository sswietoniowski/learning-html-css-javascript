import { Request, Response, NextFunction } from 'express';

const errorHandler = (
  err: any,
  // @ts-ignore
  req: Request,
  res: Response,
  // @ts-ignore
  next: NextFunction
): void => {
  const statusCode = res.statusCode < 400 ? res.statusCode : 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    // @ts-ignore
    stack: import.meta.env.PROD === 'production' ? null : err.stack,
  });
};

export default errorHandler;
