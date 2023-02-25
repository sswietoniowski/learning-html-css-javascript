import { useState, useEffect, useRef } from 'react';
import { auth } from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';

const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const isMounted = useRef(true);

  useEffect(() => {
    if (!isMounted.current) return;

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      }

      setCheckingStatus(false);
    });

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return { loggedIn, checkingStatus };
};

export default useAuthStatus;

// Protected routes in v6
// https://stackoverflow.com/questions/65505665/protected-route-with-firebase

// Fix memory leak warning
// https://stackoverflow.com/questions/59780268/cleanup-memory-leaks-on-an-unmounted-component-in-react-hooks
