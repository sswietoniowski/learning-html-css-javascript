import { Request, Response, NextFunction } from 'express';
import jsonwebtoken from 'jsonwebtoken';
import 'colors';
import asyncHandler from 'express-async-handler';

import UserModel, { User } from '../models/UserModel';

export interface UserRequest extends Request {
  user?: User;
}

const authHandler = asyncHandler(
  async (
    req: UserRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    let token;

    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer')) {
      try {
        // @ts-ignore
        const jwtSecret: string = import.meta.env.VITE_JWT_SECRET as string;

        token = authHeader.split(' ')[1].trim();

        const decodedToken = jsonwebtoken.verify(token, jwtSecret);

        // @ts-ignore
        const userId = decodedToken.sub;

        const user: User | null = await UserModel.findOne({
          _id: userId,
        })
          .select('-password')
          .exec();

        if (!user) {
          res.status(401);
          throw new Error('Not authorized, no user found');
        }

        req.user = user;
        next();
      } catch (error) {
        console.error(`${error}`.red.underline.bold);

        res.status(401);
        throw new Error('Not authorized, token failed');
      }
    }

    if (!token) {
      res.status(401);
      throw new Error('Not authorized, no token');
    }

    next();
  }
);

export default authHandler;
