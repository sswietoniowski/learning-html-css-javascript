import mongoose, { Schema } from 'mongoose';

export interface Note {
  _id: string;
  user: Schema.Types.ObjectId;
  ticket: Schema.Types.ObjectId;
  text: string;
  isStaff: boolean;
  staffId: string;
}

const noteSchema = new Schema<Note>(
  {
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    ticket: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Ticket',
    },
    text: {
      type: String,
      required: [true, 'Please provide a note'],
      maxlength: [2000, 'Note cannot be more than 2000 characters'],
    },
    isStaff: {
      type: Boolean,
      default: false,
    },
    staffId: {
      type: String,
    },
  },
  { timestamps: true }
);

const NoteModel = mongoose.model<Note>('Note', noteSchema);

export default NoteModel;
