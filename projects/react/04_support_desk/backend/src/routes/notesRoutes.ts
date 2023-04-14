import express, { Router } from 'express';
import protect from '../middleware/authMiddleware';
import { createNote, getNotes } from '../controllers/notesController';

const notesRouter: Router = express.Router({ mergeParams: true });

notesRouter.route('/').get(protect, getNotes).post(protect, createNote);

export default notesRouter;
