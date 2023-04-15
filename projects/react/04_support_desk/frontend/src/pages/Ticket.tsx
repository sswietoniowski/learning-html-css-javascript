import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Modal from 'react-modal';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import NoteItem from '../components/NoteItem';
import { AppDispatch, useTypedSelector } from '../app/store';
import { TicketsState } from '../features/tickets/ticketsSlice';
import { NotesState } from '../features/notes/notesSlice';
import { getThunk as getTicketThunk } from '../features/tickets/thunks/getThunk';
import { closeThunk as closeTicketThunk } from '../features/tickets/thunks/closeThunk';
import { getAllThunk as getNotesThunk } from '../features/notes/thunks/getAllThunk';
import { createThunk as createNoteThunk } from '../features/notes/thunks/createThunk';

const customStyles = {
  content: {
    width: '600px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
  },
};

Modal.setAppElement('#root');

const Ticket = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [noteText, setNoteText] = useState('');
  const { ticket } = useTypedSelector<TicketsState>((state) => state.tickets);
  const { notes } = useTypedSelector<NotesState>((state) => state.notes);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { ticketId } = useParams();

  useEffect(() => {
    dispatch(getTicketThunk(ticketId as string))
      .unwrap()
      .catch(toast.error);
    dispatch(getNotesThunk(ticketId as string))
      .unwrap()
      .catch(toast.error);
  }, [ticketId, dispatch]);

  // Close ticket
  const onTicketClose = () => {
    // NOTE: we can unwrap our AsyncThunkACtion here so no need for isError and
    // isSuccess state
    dispatch(closeTicketThunk(ticketId as string))
      .unwrap()
      .then(() => {
        toast.success('Ticket Closed');
        navigate('/tickets');
      })
      .catch(toast.error);
  };

  // Create note submit
  const onNoteSubmit = (e) => {
    // NOTE: we can unwrap our AsyncThunkACtion here so no need for isError and
    // isSuccess state
    e.preventDefault();
    dispatch(createNoteThunk({ ticketId: ticketId as string, note: noteText }))
      .unwrap()
      .then(() => {
        setNoteText('');
        closeModal();
      })
      .catch(toast.error);
  };

  // Open/close modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  if (!ticket) {
    return <Spinner />;
  }

  return (
    <div className='ticket-page'>
      <header className='ticket-header'>
        <BackButton />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>
          Date Submitted: {new Date(ticket.createdAt).toLocaleString('en-US')}
        </h3>
        <h3>Product: {ticket.product}</h3>
        <hr />
        <div className='ticket-desc'>
          <h3>Description of Issue</h3>
          <p>{ticket.description}</p>
        </div>
        <h2>Notes</h2>
      </header>

      {ticket.status !== 'closed' && (
        <button onClick={openModal} className='btn'>
          <FaPlus /> Add Note
        </button>
      )}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        contentLabel='Add Note'
      >
        <h2>Add Note</h2>
        <button className='btn-close' onClick={closeModal}>
          X
        </button>
        <form onSubmit={onNoteSubmit}>
          <div className='form-group'>
            <textarea
              name='noteText'
              id='noteText'
              className='form-control'
              placeholder='Note text'
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </Modal>

      {notes ? (
        notes.map((note) => <NoteItem key={note._id} note={note} />)
      ) : (
        <Spinner />
      )}

      {ticket.status !== 'closed' && (
        <button onClick={onTicketClose} className='btn btn-block btn-danger'>
          Close Ticket
        </button>
      )}
    </div>
  );
};

export default Ticket;
