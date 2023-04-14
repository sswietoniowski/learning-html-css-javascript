import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import getErrorMessage from '../../../util/getErrorMessage';
import { CreateTicketRequest, CreateTicketResponse, TicketError } from '../types';
import ticketsService from '../ticketsService';

export const create = createAsyncThunk<
  CreateTicketResponse,
  CreateTicketRequest,
  { state: RootState; rejectValue: TicketError }
>('tickets/create', async (ticket: CreateTicketRequest, { getState, rejectWithValue }) => {
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