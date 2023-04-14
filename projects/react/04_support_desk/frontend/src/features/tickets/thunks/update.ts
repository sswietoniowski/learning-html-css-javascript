import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import getErrorMessage from '../../../util/getErrorMessage';
import { CreateTicketRequest, CreateTicketResponse, TicketError, UpdateTicketRequest, UpdateTicketResponse } from '../types';
import ticketsService from '../ticketsService';

export const update = createAsyncThunk<
  UpdateTicketResponse,
  UpdateTicketRequest,
  { state: RootState; rejectValue: TicketError }
>('tickets/update', async (ticket: UpdateTicketRequest, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;

    if (!token) {
      throw new Error('No token found!');
    }

    return await ticketsService.createTicket(ticket, token);
  } catch (error: any) {
    return rejectWithValue({ message: getErrorMessage(error) });
  }
});