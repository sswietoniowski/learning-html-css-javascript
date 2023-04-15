import { createSlice } from '@reduxjs/toolkit';
import { Ticket } from './types';
import { createThunk } from './thunks/createThunk';
import { getAllThunk } from './thunks/getAllThunk';
import { getThunk } from './thunks/getThunk';

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
  extraReducers: (builder) => {
    builder
      .addCase(createThunk.pending, (state: TicketsState) => {
        state.isLoading = true;
      })
      .addCase(createThunk.fulfilled, (state: TicketsState) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Created successfully!';
      })
      .addCase(createThunk.rejected, (state: TicketsState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload?.message || 'Something went wrong!';
      })
      .addCase(getAllThunk.pending, (state: TicketsState) => {
        state.isLoading = true;
      })
      .addCase(getAllThunk.fulfilled, (state: TicketsState, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        console.log(action.payload);
        state.tickets = action.payload as unknown as Ticket[];
      })
      .addCase(getAllThunk.rejected, (state: TicketsState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.tickets = [];
        state.ticket = null;
        state.message = action.payload?.message || 'Something went wrong!';
      })
      .addCase(getThunk.pending, (state: TicketsState) => {
        state.isLoading = true;
      })
      .addCase(getThunk.fulfilled, (state: TicketsState, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.ticket = (action.payload as Ticket) || null;
      })
      .addCase(getThunk.rejected, (state: TicketsState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.ticket = null;
        state.message = action.payload?.message || 'Something went wrong!';
      });
  },
});

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;
