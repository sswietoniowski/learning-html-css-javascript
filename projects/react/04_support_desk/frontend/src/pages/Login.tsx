import { useEffect, useState } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { AppDispatch, useTypedSelector } from '../app/store';
import { LoginUserRequest } from '../features/auth/types';
import { loginThunk } from '../features/auth/thunks/loginThunk';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const { user, isLoading, isSuccess, isError, message } = useTypedSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user: LoginUserRequest = {
      email,
      password,
    };

    dispatch(loginThunk(user));
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
          <FaSignInAlt /> Login
        </h1>
        <p>Please login to get support</p>
      </section>
      <section className='form' onSubmit={onSubmit}>
        <form>
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
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
