import { useDispatch } from 'react-redux';
import { AppDispatch, useTypedSelector } from '../app/store';
import Spinner from '../components/Spinner';
import { TicketsState, reset } from '../features/tickets/ticketsSlice';
import { useEffect } from 'react';
import { getAllThunk } from '../features/tickets/thunks/getAllThunk';
import { toast } from 'react-toastify';

const Tickets = () => {
  const { tickets, isLoading, isSuccess } = useTypedSelector<TicketsState>(
    (state) => state.tickets
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getAllThunk());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return <div>Tickets</div>;
};

export default Tickets;
