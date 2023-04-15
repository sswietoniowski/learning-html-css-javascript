import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import {
  CreateTicketRequest,
  CreateTicketResponse,
  TicketError,
} from '../types';
import ticketsService from '../ticketsService';
import { getErrorMessage } from '../../../util/getErrorMessage';

export const createThunk = createAsyncThunk<
  CreateTicketResponse,
  CreateTicketRequest,
  { state: RootState; rejectValue: TicketError }
>(
  'tickets/create',
  async (ticket: CreateTicketRequest, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      if (!token) {
        throw new Error('No token found!');
      }

      return await ticketsService.createTicket(ticket, token);
    } catch (error: any) {
      return rejectWithValue({ message: getErrorMessage(error) });
    }
  }
);
