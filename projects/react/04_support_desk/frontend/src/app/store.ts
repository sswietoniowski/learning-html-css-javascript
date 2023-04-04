import { configureStore } from '@reduxjs/toolkit';

// Information about Redux configuration with TypeScript can be found here:
// https://redux.js.org/usage/usage-with-typescript

export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
