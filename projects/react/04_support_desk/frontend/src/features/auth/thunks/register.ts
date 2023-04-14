import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthError, RegisterUserRequest, RegisterUserResponse } from '../types';
import { RootState } from '../../../app/store';
import authService from '../authService';
import { getErrorMessage } from '../../../util/getErrorMessage';

export const register = createAsyncThunk<
  RegisterUserResponse,
  RegisterUserRequest,
  { state: RootState; rejectValue: AuthError }
>('auth/register', async (user: RegisterUserRequest, { rejectWithValue }) => {
  try {
    return await authService.registerUser(user);
  } catch (error: any) {
    return rejectWithValue({ message: getErrorMessage(error) });
  }
});
