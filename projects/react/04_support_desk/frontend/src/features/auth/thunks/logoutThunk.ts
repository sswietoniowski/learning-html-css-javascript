import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../authService';

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  await authService.logoutUser();
});
