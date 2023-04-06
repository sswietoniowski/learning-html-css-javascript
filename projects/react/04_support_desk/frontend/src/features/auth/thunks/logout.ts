import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../authService';

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logoutUser();
});
