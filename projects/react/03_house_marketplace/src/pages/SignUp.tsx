import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg';
import { auth, db } from '../firebase.config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, FieldValue, serverTimestamp, setDoc } from 'firebase/firestore';
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.id]: e.target.value,
    }));
  };

  interface UserData {
    name: string;
    email: string;
    password?: string;
    timestamp?: FieldValue;
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await updateProfile(auth.currentUser!, {
        displayName: name,
      });

      const userData: UserData = { ...formData };
      delete userData.password;
      userData.timestamp = serverTimestamp();

      await setDoc(doc(db, 'users', user.uid), userData);

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='pageContainer'>
        <header>
          <p className='pageHeader'>Welcome Back!</p>
        </header>
        <form onSubmit={onSubmit}>
          <input
            type='text'
            name='name'
            id='name'
            className='nameInput'
            placeholder='Name'
            value={name}
            onChange={onChange}
          />
          <input
            type='email'
            name='email'
            id='email'
            className='emailInput'
            placeholder='Email'
            value={email}
            onChange={onChange}
          />
          <div className='passwordInputDiv'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='passwordInput'
              placeholder='Password'
              name='password'
              id='password'
              value={password}
              onChange={onChange}
            />

            <img
              src={visibilityIcon}
              alt=''
              className='showPassword'
              onClick={() => setShowPassword((previousState) => !previousState)}
            />
          </div>

          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot Password
          </Link>

          <div className='signUpBar'>
            <div className='signUpText'>Sign Up</div>
            <button className='signUpButton'>
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px' />
            </button>
          </div>
        </form>
        {/* Google OAuth */}
        {/* https://firebase.google.com/docs/auth?authuser=0&hl=en - Firebase Authentication Docs */}
        <Link to='/sign-in' className='registerLink'>
          Sign In Instead
        </Link>
      </div>
    </>
  );
};

export default SignUp;
