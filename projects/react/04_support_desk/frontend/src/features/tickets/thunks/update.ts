import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import {
  TicketError,
  UpdateTicketRequest,
  UpdateTicketResponse,
} from '../types';
import ticketsService from '../ticketsService';
import { getErrorMessage } from '../../../util/getErrorMessage';

export const update = createAsyncThunk<
  UpdateTicketResponse,
  UpdateTicketRequest,
  { state: RootState; rejectValue: TicketError }
>(
  'tickets/update',
  async (ticket: UpdateTicketRequest, { getState, rejectWithValue }) => {
    try {
      const token = getState().auth.token;

      if (!token) {
        throw new Error('No token found!');
      }

      return await ticketsService.updateTicket(ticket.id, ticket, token);
    } catch (error: any) {
      return rejectWithValue({ message: getErrorMessage(error) });
    }
  }
);
