import axios from 'axios';
import {
  LoginUserRequest,
  LoginUserResponse,
  RegisterUserRequest,
  RegisterUserResponse,
} from './types';

// Interesting article about using Axios with TypeScript and React can be found here:
// https://bobbyhadz.com/blog/typescript-http-request-axios

// I would also like this gist to be used as a reference:
// https://gist.github.com/JaysonChiang/fa704307bacffe0f17d51acf6b1292fc

const registerUser = async (
  user: RegisterUserRequest
): Promise<RegisterUserResponse> => {
  const { data, status } = await axios.post<RegisterUserResponse>(
    '/users',
    user
  );

  if (status !== 201) {
    throw new Error('Could not register user!');
  }

  if (data.user) {
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);
  }

  return data;
};

const loginUser = async (
  user: LoginUserRequest
): Promise<LoginUserResponse> => {
  const { data, status } = await axios.post<LoginUserResponse>(
    '/users/login',
    user
  );

  if (status !== 200) {
    throw new Error('Could not login user!');
  }

  if (data.user) {
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);
  }

  return data;
};

const logoutUser = async (): Promise<void> => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};

const authService = {
  registerUser,
  loginUser,
  logoutUser,
};

export default authService;
