import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { getErrorMessage } from '../../../util/getErrorMessage';
import { GetAllNotesResponse, NoteError } from '../types';
import notesService from '../notesService';

export const getAllThunk = createAsyncThunk<
  GetAllNotesResponse,
  string,
  { state: RootState; rejectValue: NoteError }
>('notes/get-all', async (ticketId: string, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;

    if (!token) {
      throw new Error('No token found!');
    }

    return await notesService.getAllNotes(ticketId, token);
  } catch (error: any) {
    return rejectWithValue({ message: getErrorMessage(error) });
  }
});
