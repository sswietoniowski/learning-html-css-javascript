import axios from 'axios';
import {
  CreateTicketRequest,
  CreateTicketResponse,
  DeleteTicketResponse,
  GetTicketByIdResponse,
  GetTicketsResponse,
  UpdateTicketRequest,
  UpdateTicketResponse,
} from './types';
import { getAuthorizationHeader } from '../../util/getErrorMessage';

const createTicket = async (
  ticket: CreateTicketRequest,
  token: string
): Promise<CreateTicketResponse> => {
  const { data, status } = await axios.post<CreateTicketResponse>(
    '/tickets',
    ticket,
    getAuthorizationHeader(token)
  );

  if (status !== 201) {
    throw new Error('Could not create ticket!');
  }

  return data;
};

const getTickets = async (token: string): Promise<GetTicketsResponse> => {
  const { data, status } = await axios.get<GetTicketsResponse>(
    '/tickets',
    getAuthorizationHeader(token)
  );

  if (status !== 200) {
    throw new Error('Could not get tickets!');
  }

  return data;
};

const getTicketById = async (
  ticketId: string,
  token: string
): Promise<GetTicketByIdResponse> => {
  const { data, status } = await axios.get<GetTicketByIdResponse>(
    `/tickets/${ticketId}`,
    getAuthorizationHeader(token)
  );

  if (status !== 200) {
    throw new Error('Could not get ticket!');
  }

  return data;
};

const updateTicket = async (
  ticketId: string,
  ticket: UpdateTicketRequest,
  token: string
): Promise<UpdateTicketResponse> => {
  const { data, status } = await axios.put<UpdateTicketResponse>(
    `/tickets/${ticketId}`,
    ticket,
    getAuthorizationHeader(token)
  );

  if (status !== 200) {
    throw new Error('Could not update ticket!');
  }

  return data;
};

const deleteTicket = async (
  ticketId: string,
  token: string
): Promise<DeleteTicketResponse> => {
  const { data, status } = await axios.delete<DeleteTicketResponse>(
    `/tickets/${ticketId}`,
    getAuthorizationHeader(token)
  );

  if (status !== 200) {
    throw new Error('Could not delete ticket!');
  }

  return data;
};

const ticketsService = {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
};

export default ticketsService;
