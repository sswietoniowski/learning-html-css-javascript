import { useDispatch } from 'react-redux';
import { AppDispatch, useTypedSelector } from '../app/store';
import Spinner from '../components/Spinner';
import { TicketsState, reset } from '../features/tickets/ticketsSlice';
import { useEffect } from 'react';
import { getAllThunk } from '../features/tickets/thunks/getAllThunk';
import BackButton from '../components/BackButton';
import TicketItem from '../components/TicketItem';

const Tickets = () => {
  const { tickets } = useTypedSelector<TicketsState>((state) => state.tickets);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllThunk());
  }, [dispatch]);

  if (!tickets) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url='/' />
      <h1>Tickets</h1>
      <div className='tickets'>
        <div className='ticket-headings'>
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets &&
          tickets.map((ticket) => (
            <TicketItem key={ticket._id} ticket={ticket} />
          ))}
      </div>
    </>
  );
};

export default Tickets;
