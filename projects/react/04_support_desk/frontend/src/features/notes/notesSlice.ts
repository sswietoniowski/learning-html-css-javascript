import { createSlice } from '@reduxjs/toolkit';
import { Note } from './types';

export interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    reset: (state: NotesState) => {
      state.notes = [];
    },
  },
  extraReducers: (builder) => {},
});

export default notesSlice.reducer;
