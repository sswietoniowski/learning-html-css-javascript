import { createSlice } from '@reduxjs/toolkit';
import { Note } from './types';
import { getAllThunk } from './thunks/getAllThunk';
import { createThunk } from './thunks/createThunk';

export interface NotesState {
  notes: Note[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: NotesState = {
  notes: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    reset: (state: NotesState) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createThunk.pending, (state: NotesState) => {
        state.isLoading = true;
      })
      .addCase(createThunk.fulfilled, (state: NotesState) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = 'Created successfully!';
      })
      .addCase(createThunk.rejected, (state: NotesState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload?.message || 'Something went wrong!';
      })
      .addCase(getAllThunk.pending, (state: NotesState) => {
        state.isLoading = true;
      })
      .addCase(getAllThunk.fulfilled, (state: NotesState, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.notes = action.payload as unknown as Note[];
      })
      .addCase(getAllThunk.rejected, (state: NotesState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload?.message || 'Something went wrong!';
      });
  },
});

export default notesSlice.reducer;
