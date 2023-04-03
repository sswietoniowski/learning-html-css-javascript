import { Request, Response } from 'express';

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
export const registerUser = (req: RegisterUserRequest, res: Response): void => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400).json({ message: 'Error: Please fill all fields!' });
    return;
  }

  try {
    res.status(201).json({
      message: 'User created successfully!',
      user: {
        name,
        email,
        password,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating user',
      error,
    });
  }
};

// @desc   Login a user
// @route  POST /api/users/login
// @access Public
export const loginUser = (req: LoginUserRequest, res: Response): void => {
  const { email, password } = req.body;

  try {
    res.status(200).json({
      message: 'User logged in successfully!',
      user: {
        email,
        password: '********',
      },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error logging in user',
      error,
    });
  }
};
