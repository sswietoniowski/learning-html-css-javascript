import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import TicketModel, { Ticket } from '../models/TicketModel';
import { User } from '../models/UserModel';

export const getTickets = asyncHandler(
  async (req: Request, res: Response<Ticket[]>): Promise<void> => {
    // @ts-ignore
    const userId = req.user._id;

    const tickets = await TicketModel.find<Ticket>({
      user: userId,
    }).exec();

    res.status(200).json(tickets);
  }
);

export const getTicketById = asyncHandler(
  async (
    req: Request & { params: { id: string } },
    res: Response<Ticket>
  ): Promise<void> => {
    // @ts-ignore
    const userId: string = req.user._id;

    const ticket = await TicketModel.findById(req.params.id).exec();

    if (!ticket) {
      res.status(404);
      throw new Error('Ticket not found');
    }

    if (ticket.user.toString() !== userId.toString()) {
      res.status(403);
      throw new Error('Forbidden');
    }

    res.status(200).json(ticket);
  }
);

export const createTicket = asyncHandler(
  async (req: Request, res: Response<Ticket>): Promise<void> => {
    // @ts-ignore
    const userId: string = req.user._id;
    // @ts-ignore
    const product: string = req.body.product;
    // @ts-ignore
    const description: string = req.body.description;

    if (!product || !description) {
      res.status(400);
      throw new Error('Please provide a product and description');
    }

    const ticket: Ticket = await TicketModel.create({
      product: product,
      description: description,
      user: userId,
      status: 'new',
    });

    console.log(JSON.stringify(ticket));

    res.status(201).json(ticket);
  }
);

export const updateTicket = asyncHandler(
  async (
    req: Request<Ticket> & { params: { id: string } },
    res: Response<Ticket>
  ): Promise<void> => {
    // @ts-ignore
    const userId: string = req.user._id;
    const ticket = req.body;
    const ticketId = req.params.id;

    const existingTicket = await TicketModel.findById<Ticket>(ticketId).exec();

    if (!existingTicket) {
      res.status(404);
      throw new Error('Ticket not found');
    }

    if (existingTicket.user.toString() !== userId.toString()) {
      res.status(403);
      throw new Error('Forbidden');
    }

    const updatedTicket = await TicketModel.findByIdAndUpdate<Ticket>(
      ticketId,
      ticket,
      {
        new: true,
      }
    ).exec();

    res.status(200).json(updatedTicket!);
  }
);

export const deleteTicket = asyncHandler(
  async (
    req: Request<Ticket> & { params: { id: string } },
    res: Response<Ticket>
  ): Promise<void> => {
    // @ts-ignore
    const userId: string = req.user._id;
    const ticketId = req.params.id;

    const ticket = await TicketModel.findById<Ticket>(ticketId).exec();

    if (!ticket) {
      res.status(404);
      throw new Error('Ticket not found');
    }

    if (ticket.user.toString() !== userId.toString()) {
      res.status(403);
      throw new Error('Forbidden');
    }

    const deletedTicket = await TicketModel.findByIdAndDelete<Ticket>(
      ticketId
    ).exec();

    res.status(200).json(deletedTicket!);
  }
);
