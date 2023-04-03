import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

export interface RegisterUserRequest extends Request {
  body: {
    name: string;
    email: string;
    password: string;
  };
}

export interface LoginUserRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

// @desc   Register a user
// @route  POST /api/users
// @access Public
export const registerUser = asyncHandler(
  async (req: RegisterUserRequest, res: Response): Promise<void> => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error('Please provide a name, email and password');
    }

    try {
      res.status(201).json({
        message: 'User created successfully!',
        user: {
          name,
          email,
          password: '********',
        },
      });
    } catch (error: any) {
      res.status(500).json({
        message: 'Error creating user',
        error,
      });
    }
  }
);

// @desc   Login a user
// @route  POST /api/users/login
// @access Public
export const loginUser = asyncHandler(
  async (req: LoginUserRequest, res: Response): Promise<void> => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400);
      throw new Error('Please provide an email and password');
    }

    try {
      res.status(200).json({
        message: 'User logged in successfully!',
        user: {
          email,
          password: '********',
        },
      });
    } catch (error: any) {
      res.status(500).json({
        message: 'Error logging in user',
        error,
      });
    }
  }
);
