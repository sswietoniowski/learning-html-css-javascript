import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthError, LoginUserRequest, LoginUserResponse } from './types';
import { RootState } from '../../app/store';
import getErrorMessage from '../../util/getErrorMessage';
import authService from './authService';

export const login = createAsyncThunk<
  LoginUserResponse,
  LoginUserRequest,
  { state: RootState; rejectValue: AuthError }
>('auth/login', async (user: LoginUserRequest, { rejectWithValue }) => {
  try {
    return await authService.loginUser(user);
  } catch (error: any) {
    return rejectWithValue({ message: getErrorMessage(error) });
  }
});
