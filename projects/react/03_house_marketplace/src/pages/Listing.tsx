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
        console.log('Document data:', docSnap.data());
        setListing(docSnap.data() as ListingData);
        setLoading(false);
      }
    };

    fetchListing();
  }, [navigate, listingId]);

  return <div>Listing</div>;
};

export default Listing;
