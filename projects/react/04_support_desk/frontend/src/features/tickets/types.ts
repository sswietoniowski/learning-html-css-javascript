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
