import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import bcryptjs from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';

import UserModel, { User } from '../models/UserModel';

interface RegisterUserRequest extends Request {
  body: {
    name: string;
    email: string;
    password: string;
  };
}

interface LoginUserRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

const hashPassword = async (password: string): Promise<string> => {
  const ROUNDS = 10;
  const salt = await bcryptjs.genSalt(ROUNDS);
  const hashedPassword = await bcryptjs.hash(password, salt);
  return hashedPassword;
};

const verifyPassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isMatch = await bcryptjs.compare(password, hashedPassword);
  return isMatch;
};

const generateJwtToken = (user: User): string => {
  // @ts-ignore
  const jwtSecret: string = import.meta.env.VITE_JWT_SECRET as string;

  return jsonwebtoken.sign(
    {
      sub: user._id,
      name: user.name,
      email: user.email,
      admin: user.isAdmin,
    },
    jwtSecret,
    { expiresIn: '1h' }
  );
};

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

    // Find if user already exists
    const userExists = await UserModel.findOne({ email: email });

    if (userExists) {
      res.status(400);
      throw new Error('User already exists');
    }

    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Check if user was created
    if (!user) {
      res.status(400);
      throw new Error('Invalid user data');
    }

    res.status(201).json({
      message: 'User created successfully!',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        password: '********',
        isAdmin: user.isAdmin,
      },
      token: generateJwtToken(user), // you can check generated token here: https://jwt.io/
    });
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

    // Find user
    const user = await UserModel.findOne({ email: email });

    // Check if user exists and password is correct
    if (!user || !(await verifyPassword(password, user.password))) {
      res.status(401);
      throw new Error('Invalid credentials');
    }

    res.status(200).json({
      message: 'User logged in successfully!',
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        password: '********',
        isAdmin: user.isAdmin,
      },
      token: generateJwtToken(user),
    });
  }
);

// @desc   Get current user profile
// @route  GET /api/users/me
// @access Private
export const aboutMe = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    res.status(200).json({
      message: 'This is the about page',
    });
  }
);
