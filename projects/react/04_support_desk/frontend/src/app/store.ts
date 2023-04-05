import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';

// Information about Redux configuration with TypeScript can be found here:
// https://redux.js.org/usage/usage-with-typescript

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
