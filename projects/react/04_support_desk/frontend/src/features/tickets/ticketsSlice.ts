import { createSlice } from '@reduxjs/toolkit';
import { Ticket } from './types';

export interface TicketsState {
  tickets: Ticket[];
  ticket: Ticket | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: TicketsState = {
  tickets: [],
  ticket: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    reset: (state: TicketsState) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {},
});

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;
