import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { auth } from '../firebase.config';

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    setUser(auth.currentUser);
    console.log(auth.currentUser);
  }, []);
  return user ? (
    <div>
      <h1>Profile: {user.displayName}</h1>
    </div>
  ) : (
    <div>
      <h1>Not logged in</h1>
    </div>
  );
};

export default Profile;
