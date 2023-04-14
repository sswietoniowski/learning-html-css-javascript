import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import getErrorMessage from '../../../util/getErrorMessage';
import { GetTicketsResponse, TicketError } from '../types';
import ticketsService from '../ticketsService';

export const getAll = createAsyncThunk<
  GetTicketsResponse,
  undefined,
  { state: RootState; rejectValue: TicketError }
>('tickets/get-all', async (_, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;

    if (!token) {
      throw new Error('No token found!');
    }

    return await ticketsService.getTickets(token);
  } catch (error: any) {
    return rejectWithValue({ message: getErrorMessage(error) });
  }
});
