import { useEffect, useState } from 'react';
import { AppDispatch, useTypedSelector } from '../app/store';
import { AuthState } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { createThunk } from '../features/tickets/thunks/createThunk';
import { TicketsState, reset } from '../features/tickets/ticketsSlice';
import Spinner from '../components/Spinner';
import BackButton from '../components/BackButton';

const NewTicket = () => {
  const [product, setProduct] = useState('AMD Ryzen 9 5950X');
  const [description, setDescription] = useState('');

  const { user } = useTypedSelector<AuthState>((state) => state.auth);

  const { isLoading, isError, isSuccess, message } =
    useTypedSelector<TicketsState>((state) => state.tickets);

  const name = user!.name;
  const email = user!.email;

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
      return;
    }

    if (isSuccess) {
      dispatch(reset());
      navigate('/tickets');
    }

    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(createThunk({ product, description }))
      .unwrap()
      .then(() => {
        navigate('/tickets');
        toast.success('New ticket created');
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <BackButton url='/' />
      <section className='heading'>
        <h1>Create New Ticket</h1>
        <p>Please fill out the form below</p>
      </section>
      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input
            type='text'
            className='form-control'
            id='name'
            value={name}
            disabled
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Customer Email</label>
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            disabled
          />
        </div>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='product'>Product</label>
            <select
              name='product'
              id='product'
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value='AMD Ryzen 9 5950X'>AMD Ryzen 9 5950X</option>
              <option value='Gigabyte B550 AORUS ELITE AX V2'>
                Gigabyte B550 AORUS ELITE AX V2
              </option>
              <option value='Gigabyte GeForce RTX 3070 Ti AORUS MASTER LHR 8GB GDDRX6'>
                Gigabyte GeForce RTX 3070 Ti AORUS MASTER LHR 8GB GDDRX6
              </option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description of the issue</label>
            <textarea
              className='form-control'
              id='description'
              name='description'
              placeholder='Description'
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default NewTicket;
