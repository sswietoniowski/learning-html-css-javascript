import axios from 'axios';
import {
  CreateTicketRequest,
  CreateTicketResponse,
  GetTicketResponse,
  GetAllTicketsResponse,
  CloseTicketResponse as CloseTicketResponse,
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

const getAllTickets = async (token: string): Promise<GetAllTicketsResponse> => {
  const { data, status } = await axios.get<GetAllTicketsResponse>(
    '/tickets',
    getAuthorizationHeader(token)
  );

  if (status !== 200) {
    throw new Error('Could not get tickets!');
  }

  return data;
};

const getTicket = async (
  ticketId: string,
  token: string
): Promise<GetTicketResponse> => {
  const { data, status } = await axios.get<GetTicketResponse>(
    `/tickets/${ticketId}`,
    getAuthorizationHeader(token)
  );

  if (status !== 200) {
    throw new Error('Could not get ticket!');
  }

  return data;
};

const closeTicket = async (
  ticketId: string,
  token: string
): Promise<CloseTicketResponse> => {
  const { data, status } = await axios.put<CloseTicketResponse>(
    `/tickets/${ticketId}`,
    { status: 'closed' },
    getAuthorizationHeader(token)
  );

  if (status !== 200) {
    throw new Error('Could not update ticket!');
  }

  return data;
};

const ticketsService = {
  createTicket,
  getAllTickets,
  getTicket,
  closeTicket,
};

export default ticketsService;
