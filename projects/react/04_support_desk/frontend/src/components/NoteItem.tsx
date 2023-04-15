import { useTypedSelector } from '../app/store';
import { AuthState } from '../features/auth/authSlice';
import { Note } from '../features/notes/types';

interface Props {
  note: Note;
}

const NoteItem: React.FC<Props> = ({ note }) => {
  const { user } = useTypedSelector<AuthState>((state) => state.auth);

  return (
    <div
      className='note'
      style={{
        backgroundColor: note.isStaff ? 'rgba(0,0,0,0.7)' : '#fff',
        color: note.isStaff ? '#fff' : '#000',
      }}
    >
      <h4>
        Note from{' '}
        {note.isStaff ? <span>Staff</span> : <span>{user!.name}</span>}
      </h4>
      <p>{note.text}</p>
      <div className='note-date'>
        {new Date(note.createdAt).toLocaleString('en-US')}
      </div>
    </div>
  );
};

export default NoteItem;
