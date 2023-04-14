import express, { Router } from 'express';
import {
  createTicket,
  deleteTicket,
  getTicketById,
  getTickets,
  updateTicket,
} from '../controllers/ticketsController';
import protect from '../middleware/authMiddleware';
import notesRouter from './notesRoutes';

const ticketsRouter: Router = express.Router();

ticketsRouter.route('/').get(protect, getTickets).post(protect, createTicket);

ticketsRouter
  .route('/:id')
  .get(protect, getTicketById)
  .put(protect, updateTicket)
  .delete(protect, deleteTicket);

ticketsRouter.use('/:ticketId/notes', notesRouter);

export default ticketsRouter;
