import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { DeleteTicketResponse, TicketError } from '../types';
import ticketsService from '../ticketsService';
import { getErrorMessage } from '../../../util/getErrorMessage';

export const remove = createAsyncThunk<
  DeleteTicketResponse,
  string,
  { state: RootState; rejectValue: TicketError }
>('tickets/delete', async (ticketId: string, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;

    if (!token) {
      throw new Error('No token found!');
    }

    return await ticketsService.deleteTicket(ticketId, token);
  } catch (error: any) {
    return rejectWithValue({ message: getErrorMessage(error) });
  }
});
