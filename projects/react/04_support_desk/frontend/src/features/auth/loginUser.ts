import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchUserError, LoginUserRequest, LoginUserResponse } from './types';
import apiUrl from '../../config/api';
import { RootState } from '../../app/store';

export const loginUser = createAsyncThunk<
  LoginUserResponse,
  LoginUserRequest,
  { state: RootState; rejectValue: FetchUserError }
>('auth/login', async (user: LoginUserRequest, { rejectWithValue }) => {
  try {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.status !== 200) {
      throw new Error('Could not login user!');
    }

    const data: LoginUserResponse =
      (await response.json()) as LoginUserResponse;
    return data;
  } catch (err: any) {
    return rejectWithValue({ message: err.message });
  }
});
