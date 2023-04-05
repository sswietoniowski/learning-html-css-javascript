// Interesting article explaining how to use Redux Toolkit with TypeScript can be found here:
// https://www.newline.co/@bespoyasov/how-to-use-thunks-with-redux-toolkit-and-typescript--1e65fc64

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface AuthState {
  user: string | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: AuthState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export interface RegisterUserRequest {
  name: string;
  email: string;
  password: string;
}

export interface RegisterUserResponse {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
  };
  token: string;
}

export interface FetchError {
  message: string;
}

export const register = createAsyncThunk<
  RegisterUserResponse,
  RegisterUserRequest,
  { rejectValue: FetchError }
>('auth/register', async (user: RegisterUserRequest, thunkApi) => {
  console.log(`Register: ${JSON.stringify(user)}`);

  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (response.status !== 201) {
    return thunkApi.rejectWithValue({ message: 'Could not register user!' });
  }

  const data = (await response.json()) as RegisterUserResponse;
  return data;
});

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
  };
  token: string;
}

export const login = createAsyncThunk<
  LoginUserResponse,
  LoginUserRequest,
  { rejectValue: FetchError }
>('auth/login', async (user: LoginUserRequest, thunkApi) => {
  console.log(`Login: ${JSON.stringify(user)}`);

  const response = await fetch('/api/users/login', {
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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
