import axios from 'axios';
import {
  LoginUserRequest,
  LoginUserResponse,
  RegisterUserRequest,
  RegisterUserResponse,
} from './types';
import apiUrl from '../../config/api';

const registerUser = async (
  user: RegisterUserRequest
): Promise<RegisterUserResponse> => {
  const { data, status } = await axios.post<RegisterUserResponse>(
    `${apiUrl}/users`,
    user,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
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
    `${apiUrl}/users/login`,
    user,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
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

const authService = {
  registerUser,
  loginUser,
};

export default authService;
