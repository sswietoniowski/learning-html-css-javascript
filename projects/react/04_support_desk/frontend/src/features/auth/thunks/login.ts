import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthError, LoginUserRequest, LoginUserResponse } from '../types';
import { RootState } from '../../../app/store';
import authService from '../authService';
import { getErrorMessage } from '../../../util/getErrorMessage';

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
