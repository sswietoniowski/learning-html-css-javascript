// Interesting article explaining how to use Redux Toolkit with TypeScript can be found here:
// https://www.newline.co/@bespoyasov/how-to-use-thunks-with-redux-toolkit-and-typescript--1e65fc64

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apiUrl from '../../config/api';
import {
  AuthState,
  FetchError,
  LoginUserRequest,
  LoginUserResponse,
  RegisterUserRequest,
  RegisterUserResponse,
} from './types';

const initialState: AuthState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
