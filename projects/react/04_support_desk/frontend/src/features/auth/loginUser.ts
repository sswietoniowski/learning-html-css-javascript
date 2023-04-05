import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchUserError, LoginUserRequest, LoginUserResponse } from './types';
import apiUrl from '../../config/api';

export const loginUser = createAsyncThunk<
  LoginUserResponse,
  LoginUserRequest,
  { rejectValue: FetchUserError }
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

  const data: LoginUserResponse = (await response.json()) as LoginUserResponse;
  return data;
});
