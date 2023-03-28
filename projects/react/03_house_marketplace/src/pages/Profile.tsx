import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { db, auth } from '../firebase.config';
import { updateProfile } from 'firebase/auth';
import {
  doc,
  updateDoc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
} from 'firebase/firestore';
import { toast } from 'react-toastify';
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg';
import homeIcon from '../assets/svg/homeIcon.svg';
import ListingItem from '../components/ListingItem';

interface ListingData {
  name: string;
  type: string;
  imageUrls: string[];
  location: string;
  offer: boolean;
  discountedPrice: number;
  regularPrice: number;
  bedrooms: number;
  bathrooms: number;
}

interface ListingItemProps {
  id: string;
  listing: ListingData;
  onDelete?: (id: string, name: string) => void;
}

const Profile = () => {
  const [listings, setListings] = useState<ListingItemProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser?.displayName,
    email: auth.currentUser?.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  useEffect(() => {
    const getProfileDetails = async () => {
      if (auth.currentUser === null) return;

      const listingsRef = collection(db, 'listings');

      const q = query(
        listingsRef,
        where('userRef', '==', auth.currentUser.uid),
        orderBy('timestamp', 'desc')
      );

      const querySnapshot = await getDocs(q);

      const listings: ListingItemProps[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        listing: doc.data() as ListingData,
      }));

      setListings(listings);
      setLoading(false);
    };

    getProfileDetails();
  }, [auth.currentUser!.uid]);

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

  const onDelete = async (listingId: string) => {
    if (!window.confirm('Are you sure you want to delete this listing?')) {
      return;
    }

    try {
      const listingRef = doc(db, 'listings', listingId);
      await deleteDoc(listingRef);
      setListings(listings.filter((listing) => listing.id !== listingId));
      toast.success('Listing deleted');
    } catch (error) {
      toast.error('Could not delete listing');
    }
  };

  const onEdit = (listingId: string) => {
    navigate(`/edit-listing/${listingId}`);
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
        {!loading && listings.length > 0 && (
          <>
            <p className='listingText'>Your Listings</p>
            <ul className='listingsList'>
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  id={listing.id}
                  listing={listing.listing}
                  onDelete={() => onDelete(listing.id)}
                  onEdit={() => onEdit(listing.id)}
                />
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
};

export default Profile;
