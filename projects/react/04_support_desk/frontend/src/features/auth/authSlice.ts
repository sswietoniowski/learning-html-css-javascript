// Interesting article explaining how to use Redux Toolkit with TypeScript can be found here:
// https://www.newline.co/@bespoyasov/how-to-use-thunks-with-redux-toolkit-and-typescript--1e65fc64

import { createSlice } from '@reduxjs/toolkit';
import { User } from './types';
import { RootState } from '../../app/store';
import { register } from './register';
import { login } from './login';
import { logout } from './logout';

export interface AuthState {
  user: User | null;
  token: string | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

// Get the user from local storage if it exists
let user: User | null = null;
if (localStorage.getItem('user')) {
  user = JSON.parse(localStorage.getItem('user')!);
}
let token: string | null = null;
if (localStorage.getItem('token')) {
  token = localStorage.getItem('token');
}

const initialState: AuthState = {
  user: user,
  token: token,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state: AuthState) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
  },
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
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = null;
      state.token = null;
      state.isSuccess = true;
      state.isLoading = false;
      state.message = '';
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.user = null;
      state.token = null;
      state.isError = true;
      state.isLoading = false;
      state.message = '';
    });
  },
});

export const authStatus = (state: RootState) => state.auth.isLoading;

export const { reset } = authSlice.actions;
export default authSlice.reducer;
