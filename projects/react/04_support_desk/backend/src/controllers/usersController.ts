import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import bcryptjs from 'bcryptjs';
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
    const userDoc = await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    // Check if user was created
    if (!userDoc) {
      res.status(400);
      throw new Error('Invalid user data');
    }

    const user: User = {
      _id: userDoc._id,
      name: userDoc.name,
      email: userDoc.email,
      password: '********',
      isAdmin: userDoc.isAdmin,
    };

    res.status(201).json({
      message: 'User created successfully!',
      user: {
        ...user,
      },
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

    if (!user || !(await verifyPassword(password, user.password))) {
      res.status(401);
      throw new Error('Invalid credentials');
    }

    res.status(200).json({
      message: 'User logged in successfully!',
      user: {
        email,
        password: '********',
      },
    });
  }
);
