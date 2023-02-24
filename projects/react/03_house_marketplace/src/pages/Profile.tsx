import { useEffect } from 'react';
import { auth } from '../firebase.config';

const Profile = () => {
  useEffect(() => {
    console.log(auth.currentUser);
  }, []);
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
};

export default Profile;
