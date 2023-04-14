import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import TicketModel, { Ticket } from '../models/TicketModel';

// @desc   Get all tickets
// @route  GET /api/tickets
// @access Private
export const getTickets = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // @ts-ignore
    const userId = req.user._id as string;

    const tickets = await TicketModel.find<Ticket>({
      user: userId,
    }).exec();

    res.status(200).json(tickets);
  }
);

// @desc   Get ticket by ID
// @route  GET /api/tickets/:id
// @access Private
export const getTicketById = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // @ts-ignore
    const userId: string = req.user._id as string;
    const ticketId: string = req.params.id;

    const ticket = await TicketModel.findById(ticketId).exec();

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

// @desc   Create a ticket
// @route  POST /api/tickets
// @access Private
export const createTicket = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // @ts-ignore
    const userId: string = req.user._id as string;
    const product: string = req.body.product as string;
    const description: string = req.body.description as string;

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

    res.status(201).json(ticket);
  }
);

// @desc   Update a ticket
// @route  PUT /api/tickets/:id
// @access Private
export const updateTicket = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // @ts-ignore
    const userId: string = req.user._id as string;
    const ticket = req.body as Ticket;
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

// @desc   Delete a ticket
// @route  DELETE /api/tickets/:id
// @access Private
export const deleteTicket = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // @ts-ignore
    const userId: string = req.user._id as string;
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

    await TicketModel.findByIdAndDelete<Ticket>(ticketId).exec();

    res.status(200).json({ success: true });
  }
);
