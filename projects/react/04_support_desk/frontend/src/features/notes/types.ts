export interface CreateNoteRequest {
  text: string;
}

export interface Note {
  _id: string;
  user: string;
  ticket: string;
  text: string;
  isStaff: boolean;
  staffId: string;
  createdAt: string;
}

export interface CreateNoteRequest {
  text: string;
}

export interface CreateNoteResponse {
  note: Note;
}

export interface GetAllNotesResponse {
  notes: Note[];
}

export interface NoteError {
  message: string;
}
