import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase.config';
import Spinner from '../components/Spinner';
import shareIcon from '../assets/svg/shareIcon.svg';

interface ListingData {
  type: string;
  name: string;
  bedrooms: number;
  bathrooms: number;
  parking: boolean;
  furnished: boolean;
  offer: boolean;
  regularPrice: number;
  discountedPrice?: number;
  imageUrls?: string[];
  location: string;
  geolocation: {
    lat: number;
    lng: number;
  };
  timestamp: any;
  userRef: string;
}

const Listing = () => {
  const [listing, setListing] = useState<ListingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);

  const { categoryName, listingId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, 'listings', listingId!);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setListing(docSnap.data() as ListingData);
        setLoading(false);
      }
    };

    fetchListing();
  }, [navigate, listingId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main>
      {/* Slider */}

      <div
        className='shareIconDiv'
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
          setTimeout(() => {
            setShareLinkCopied(false);
          }, 2000);
        }}
      >
        <img src={shareIcon} alt='share icon' className='shareIcon' />
      </div>

      {shareLinkCopied && <p className='linkCopied'>Link Copied!</p>}

      <div className='listingDetails'>
        <p className='listingName'>
          {listing!.name} - $
          {listing!.offer
            ? listing!
                .discountedPrice!.toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            : listing?.regularPrice
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </p>
        <p className='listingLocation'>{listing!.location}</p>
        <p className='listingType'>
          For {listing!.type === 'rent' ? 'Rent' : 'Sale'}
        </p>

        {listing?.offer && (
          <p className='discountPrice'>
            $
            {(listing.regularPrice - listing.discountedPrice!)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
            discount
          </p>
        )}

        <ul className='listingDetailsList'>
          <li>
            {listing!.bedrooms > 1
              ? `${listing?.bedrooms} Bedrooms`
              : '1 Bedroom'}
          </li>
          <li>
            {listing!.bathrooms > 1
              ? `${listing?.bathrooms} Bathrooms`
              : '1 Bathroom'}
          </li>
          <li>{listing!.parking && 'Parking Spot'}</li>
          <li>{listing!.furnished && 'Furnished'}</li>
        </ul>

        <p className='listingLocationTitle'>Location</p>

        {/* Map */}

        {auth.currentUser?.uid !== listing?.userRef && (
          <Link
            to={`/contact/${listing!.userRef}?listingName=${
              listing!.name
            }`}
            className='primaryButton'
          >
            Contact Landlord
          </Link>
        )}
      </div>
    </main>
  );
};

export default Listing;
