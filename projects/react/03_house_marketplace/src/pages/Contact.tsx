import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { db, auth } from '../firebase.config';
import { getDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';

interface LandlordData {
  email: string;
  name: string;
  timestamp: any;
}

const Contact = () => {
  const [message, setMessage] = useState('');
  const [landlord, setLandlord] = useState<LandlordData | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const { landlordId } = useParams();

  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, 'users', landlordId!);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setLandlord(docSnap.data() as LandlordData);
      } else {
        toast.error('Could not get landlord data');
      }
    };
    getLandlord();
  }, [landlordId]);

  return (
    <div className='pageContainer'>
      <header>
        <p className='pageHeader'>Contact Landlord</p>
      </header>
      {landlord && (
        <main>
          <div className='contactLandlord'>
            <p className='landlordName'>Contact {landlord.name}</p>
          </div>
          <form className='messageForm'>
            <div className='messageDiv'>
              <label htmlFor='message' className='messageLabel'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                className='textarea'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <a
              href={`mailto:${landlord.email}?subject=${searchParams.get(
                'listingName'
              )}&body=${message}`}
            >
              <button type='button' className='primaryButton'>
                Send Message
              </button>
            </a>
          </form>
        </main>
      )}
    </div>
  );
};

export default Contact;
