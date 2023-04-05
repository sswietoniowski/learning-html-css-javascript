import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchError, LoginUserRequest, LoginUserResponse } from './types';
import apiUrl from '../../config/api';

export const login = createAsyncThunk<
  LoginUserResponse,
  LoginUserRequest,
  { rejectValue: FetchError }
>('auth/login', async (user: LoginUserRequest, thunkApi) => {
  console.log(`Login: ${JSON.stringify(user)}`);

  const response = await fetch(`${apiUrl}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (response.status !== 200) {
    return thunkApi.rejectWithValue({ message: 'Could not login user!' });
  }

  const data = (await response.json()) as LoginUserResponse;
  return data;
});
