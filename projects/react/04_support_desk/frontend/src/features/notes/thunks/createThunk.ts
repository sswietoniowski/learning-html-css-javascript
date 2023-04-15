import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { getErrorMessage } from '../../../util/getErrorMessage';
import { CreateNoteRequest, CreateNoteResponse, NoteError } from '../types';
import notesService from '../notesService';

export const createThunk = createAsyncThunk<
  CreateNoteResponse,
  { ticketId: string; note: CreateNoteRequest },
  { state: RootState; rejectValue: NoteError }
>('notes/create', async (request, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;

    if (!token) {
      throw new Error('No token found!');
    }

    return await notesService.createNote(request.ticketId, request.note, token);
  } catch (error: any) {
    return rejectWithValue({ message: getErrorMessage(error) });
  }
});
