import { Request, Response } from 'express';

export const registerUser = (req: Request, res: Response): void => {
  const { user } = req.body;

  try {
    res.status(201).json({
      message: 'User created successfully!',
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating user',
      error,
    });
  }
};

export const loginUser = (req: Request, res: Response): void => {
  const { user } = req.body;

  try {
    res.status(200).json({
      message: 'User logged in successfully!',
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error logging in user',
      error,
    });
  }
};
