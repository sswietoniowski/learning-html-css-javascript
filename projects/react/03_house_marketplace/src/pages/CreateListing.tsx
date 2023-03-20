import { useState, useEffect, useRef } from 'react';
import { auth } from '../firebase.config';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

interface FormData {
  type: string;
  name: string;
  bedrooms: number;
  bathrooms: number;
  furnished: boolean;
  address: string;
  offer: boolean;
  regularPrice: number;
  discountedPrice?: number;
  images?: string[];
  latitude?: number;
  longitude?: number;
  userRef?: string;
}

const CreateListing = () => {
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    type: 'rent',
    name: '',
    bedrooms: 0,
    bathrooms: 0,
    furnished: false,
    address: '',
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
    images: [],
    latitude: 0,
    longitude: 0,
  });

  const navigate = useNavigate();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate('/sign-in');
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  if (loading) {
    return <Spinner />;
  }

  return <div>Create</div>;
};

export default CreateListing;
