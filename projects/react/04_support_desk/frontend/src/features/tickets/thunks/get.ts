import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import getErrorMessage from '../../../util/getErrorMessage';
import { GetTicketByIdResponse, TicketError } from '../types';
import ticketsService from '../ticketsService';

export const getAll = createAsyncThunk<
  GetTicketByIdResponse,
  string,
  { state: RootState; rejectValue: TicketError }
>('tickets/get', async (ticketId: string, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;

    if (!token) {
      throw new Error('No token found!');
    }

    return await ticketsService.getTicketById(ticketId, token);
  } catch (error: any) {
    return rejectWithValue({ message: getErrorMessage(error) });
  }
});
