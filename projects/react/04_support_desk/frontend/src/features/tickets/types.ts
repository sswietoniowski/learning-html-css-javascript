export interface CreateTicketRequest {
  product: string;
  description: string;
}

export interface TicketId {
  id: string;
}

export interface Ticket {
  id: TicketId;
  user: string;
  product: string;
  description: string;
  status: string;
}

export interface CreateTicketResponse {
  ticket: Ticket;
}

export interface GetTicketsResponse {
  tickets: Ticket[];
}

export interface GetTicketByIdResponse {
  ticket?: Ticket;
}

export interface UpdateTicketRequest {
  id: string;
  title: string;
  description: string;
  status: string;
}

export interface UpdateTicketResponse {
  ticket?: Ticket;
}

export interface DeleteTicketResponse {
  success: boolean;
}

export interface TicketError {
  message: string;
}
