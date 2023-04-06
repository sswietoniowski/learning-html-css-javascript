import { createAsyncThunk } from '@reduxjs/toolkit';
import { RegisterUserRequest, RegisterUserResponse } from './types';
import apiUrl from '../../config/api';
import { RootState } from '../../app/store';

export const registerUser = createAsyncThunk<
  RegisterUserResponse,
  RegisterUserRequest,
  { state: RootState }
>('auth/register', async (user: RegisterUserRequest, { rejectWithValue }) => {
  try {
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

    const data = (await response.json()) as RegisterUserResponse;
    return data;
  } catch (err: any) {
    return rejectWithValue({ message: err.message });
  }
});
