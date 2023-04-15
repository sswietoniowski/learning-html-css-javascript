import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { GetAllTicketsResponse, TicketError } from '../types';
import ticketsService from '../ticketsService';
import { getErrorMessage } from '../../../util/getErrorMessage';

export const getAllThunk = createAsyncThunk<
  GetAllTicketsResponse,
  undefined,
  { state: RootState; rejectValue: TicketError }
>('tickets/get-all', async (_, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;

    if (!token) {
      throw new Error('No token found!');
    }

    return await ticketsService.getAllTickets(token);
  } catch (error: any) {
    return rejectWithValue({ message: getErrorMessage(error) });
  }
});
