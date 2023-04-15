import { useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { AppDispatch, useTypedSelector } from '../app/store';
import { RegisterUserRequest } from '../features/auth/types';
import { useNavigate } from 'react-router-dom';
import { reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';
import { registerThunk } from '../features/auth/thunks/registerThunk';
interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmed_password: string;
}

const Register = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    confirmed_password: '',
  });

  const { name, email, password, confirmed_password } = formData;

  const { user, isLoading, isSuccess, isError, message } = useTypedSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmed_password) {
      toast.error('Passwords do not match');
      return;
    }

    const user: RegisterUserRequest = {
      name,
      email,
      password,
    };

    dispatch(registerThunk(user));
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isError) {
      toast.error(message);
      return;
    }

    // Redirect when user is registered
    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className='form' onSubmit={onSubmit}>
        <form>
          <div className='form-group'>
            <input
              type='text'
              className='form-control'
              name='name'
              id='name'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              name='email'
              id='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              name='password'
              id='password'
              value={password}
              onChange={onChange}
              placeholder='Enter your password'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              name='confirmed_password'
              id='confirmed_password'
              value={confirmed_password}
              onChange={onChange}
              placeholder='Confirm your password'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
