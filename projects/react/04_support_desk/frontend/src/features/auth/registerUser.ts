import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  FetchUserError,
  RegisterUserRequest,
  RegisterUserResponse,
} from './types';
import apiUrl from '../../config/api';
import { RootState } from '../../app/store';

export const registerUser = createAsyncThunk<
  RegisterUserResponse,
  RegisterUserRequest,
  { state: RootState; rejectValue: FetchUserError }
>('auth/register', async (user: RegisterUserRequest, { rejectWithValue }) => {
  try {
    console.log(`[REDUX] Register: ${JSON.stringify(user)}`);

    const response = await fetch(`${apiUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.status !== 201) {
      throw new Error('Could not register user!');
    }

    const data: RegisterUserResponse =
      (await response.json()) as RegisterUserResponse;
    return data;
  } catch (err: any) {
    return rejectWithValue({ message: err.message });
  }
});
