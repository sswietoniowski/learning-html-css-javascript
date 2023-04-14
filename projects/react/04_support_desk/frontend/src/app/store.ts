import { TypedUseSelectorHook, useSelector } from 'react-redux';

import {
  Action,
  AnyAction,
  ThunkAction,
  ThunkDispatch,
  configureStore,
} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import ticketsReducer from '../features/tickets/ticketsSlice';

// Information about Redux configuration with TypeScript can be found here:
// https://redux.js.org/usage/usage-with-typescript

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
