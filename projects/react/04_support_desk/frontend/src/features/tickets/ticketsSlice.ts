import { createSlice } from '@reduxjs/toolkit';
import { Ticket } from './types';

export interface TicketsState {
  tickets: Ticket[];
  ticket: Ticket | null;
}

const initialState: TicketsState = {
  tickets: [],
  ticket: null,
};

export const ticketSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    reset: (state: TicketsState) => {
      state.tickets = [];
      state.ticket = null;
    },
  },
  extraReducers: (_) => {},
});

export default ticketSlice.reducer;
