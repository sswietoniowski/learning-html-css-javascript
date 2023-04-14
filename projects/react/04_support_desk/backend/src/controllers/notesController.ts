import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';

import NoteModel, { Note } from '../models/NoteModel';
import TicketModel from '../models/TicketModel';

// @desc   Get all notes
// @route  GET /api/tickets/:ticketId/notes
// @access Private
export const getNotes = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // @ts-ignore
    const userId: string = req.user._id as string;
    const ticketId: string = req.params.ticketId;

    const ticket = await TicketModel.findById(ticketId).exec();

    if (!ticket) {
      res.status(404);
      throw new Error('Ticket not found');
    }

    if (ticket.user.toString() !== userId.toString()) {
      res.status(403);
      throw new Error('Forbidden');
    }

    const notes = await NoteModel.find<Note>({
      ticket: ticketId,
    }).exec();

    res.status(200).json(notes);
  }
);

// @desc   Create a note
// @route  POST /api/tickets/:ticketId/notes
// @access Private
export const createNote = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // @ts-ignore
    const userId = req.user._id as string;
    const ticketId = req.params.ticketId;
    const text: string = req.body.text as string;

    if (!ticketId || !text) {
      res.status(400);
      throw new Error('Please provide a text');
    }

    const ticket = await TicketModel.findById(ticketId).exec();

    if (!ticket) {
      res.status(404);
      throw new Error('Ticket not found');
    }

    if (ticket.user.toString() !== userId.toString()) {
      res.status(403);
      throw new Error('Forbidden');
    }

    const note: Note = await NoteModel.create({
      user: userId,
      ticket: ticketId,
      text: text,
      isStaff: false,
    });

    res.status(201).json(note);
  }
);
