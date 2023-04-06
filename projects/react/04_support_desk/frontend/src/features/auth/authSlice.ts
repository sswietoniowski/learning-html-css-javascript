// Interesting article explaining how to use Redux Toolkit with TypeScript can be found here:
// https://www.newline.co/@bespoyasov/how-to-use-thunks-with-redux-toolkit-and-typescript--1e65fc64

import { createSlice } from '@reduxjs/toolkit';
import { User } from './types';
import { RootState } from '../../app/store';
import { register } from './register';
import { login } from './login';

export interface AuthState {
  user: User | null;
  token: string | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: AuthState = {
  user: null as User | null,
  token: null as string | null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isSuccess = true;
      state.isLoading = false;
      if (action.payload?.message) {
        state.message = action.payload?.message;
      }
    });
    builder.addCase(register.rejected, (state, action) => {
      state.user = null;
      state.token = null;
      state.isError = true;
      state.isLoading = false;
      if (action.payload?.message) {
        state.message = action.payload?.message;
      }
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isSuccess = true;
      state.isLoading = false;
      if (action.payload?.message) {
        state.message = action.payload?.message;
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      state.user = null;
      state.token = null;
      state.isError = true;
      state.isLoading = false;
      if (action.payload?.message) {
        state.message = action.payload?.message;
      }
    });
  },
});

export const authStatus = (state: RootState) => state.auth.isLoading;

export default authSlice.reducer;
