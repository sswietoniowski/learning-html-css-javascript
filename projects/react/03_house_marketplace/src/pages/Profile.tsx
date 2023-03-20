import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase.config';
import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg';
import homeIcon from '../assets/svg/homeIcon.svg';

const Profile = () => {
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();

    navigate('/');
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser === null) return;

      if (auth.currentUser?.displayName === name) return;

      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      const userRef = doc(db, 'users', auth.currentUser.uid);

      await updateDoc(userRef, {
        name,
        email,
      });
    } catch (error) {
      toast.error('Could not update profile details');
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((previousState) => ({
      ...previousState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className='profile'>
      <header className='profileHeader'>
        <p className='pageHeader'>My Profile</p>
        <button className='logOut' onClick={onLogout}>
          Logout
        </button>
      </header>

      <main>
        <div className='profileDetails'>
          <p className='profileDetailsText'>Personal Details</p>
          <p
            className='changePersonalDetails'
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((previousState) => !previousState);
            }}
          >
            {changeDetails ? 'done' : 'change'}
          </p>
        </div>
        <div className='profileCard'>
          <form>
            <input
              type='text'
              name='name'
              id='name'
              className={!changeDetails ? 'profileName' : 'profileNameActive'}
              disabled={!changeDetails}
              value={name!}
              onChange={onChange}
            />
            <input
              type='email'
              name='email'
              id='email'
              className='profileEmail'
              disabled={true}
              value={email!}
              onChange={onChange}
            />
          </form>
        </div>
        <Link to='/create-listing' className='createListing'>
          <img src={homeIcon} alt='home' />
          <p>Sell or rent your home</p>
          <img src={arrowRight} alt='arrow right' />
        </Link>
      </main>
    </div>
  );
};

export default Profile;
