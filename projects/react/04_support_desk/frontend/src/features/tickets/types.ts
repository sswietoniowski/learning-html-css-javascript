export interface CreateTicketRequest {
  product: string;
  description: string;
}

export interface Ticket {
  _id: string;
  user: string;
  product: string;
  description: string;
  status: string;
  createdAt: string;
}

export interface CreateTicketResponse {
  ticket: Ticket;
}

export interface GetAllTicketsResponse {
  tickets: Ticket[];
}

export interface GetTicketResponse {
  ticket?: Ticket;
}

export interface CloseTicketResponse {
  ticket: Ticket;
}

export interface TicketError {
  message: string;
}
