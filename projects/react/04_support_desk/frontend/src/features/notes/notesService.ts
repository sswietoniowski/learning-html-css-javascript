import axios from 'axios';
import {
  CreateNoteRequest,
  CreateNoteResponse,
  GetAllNotesResponse,
} from './types';
import { getAuthorizationHeader } from '../../util/getErrorMessage';

const createNote = async (
  ticketId: string,
  note: CreateNoteRequest,
  token: string
): Promise<CreateNoteResponse> => {
  const { data, status } = await axios.post<CreateNoteResponse>(
    `/tickets/${ticketId}/notes`,
    note,
    getAuthorizationHeader(token)
  );

  if (status !== 201) {
    throw new Error('Could not create ticket!');
  }

  return data;
};

const getAllNotes = async (
  ticketId: string,
  token: string
): Promise<GetAllNotesResponse> => {
  const { data, status } = await axios.get<GetAllNotesResponse>(
    `/tickets/${ticketId}/notes`,
    getAuthorizationHeader(token)
  );

  if (status !== 200) {
    throw new Error('Could not get tickets!');
  }

  return data;
};

const notesService = {
  createNote,
  getAllNotes,
};

export default notesService;
