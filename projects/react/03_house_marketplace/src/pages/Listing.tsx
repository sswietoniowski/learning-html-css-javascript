import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db, auth } from '../firebase.config';
import Spinner from '../components/Spinner';
import shareIcon from '../assets/svg/shareIcon.svg';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

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
      <Swiper slidesPerView={1} pagination={{ clickable: true }}>
        {listing!.imageUrls!.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: `url(${url}) center no-repeat`,
                backgroundSize: 'cover',
              }}
              className='swiperSlideDiv'
            ></div>
            {/* <img src={url} alt='listing' className='swiperSlideDiv' /> */}
          </SwiperSlide>
        ))}
      </Swiper>

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

        <div className='leafletContainer'>
          <MapContainer
            style={{ height: '100%', width: '100%' }}
            center={[listing!.geolocation.lat, listing!.geolocation.lng]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
            />

            <Marker
              position={[listing!.geolocation.lat, listing!.geolocation.lng]}
            >
              <Popup>{listing!.location}</Popup>
            </Marker>
          </MapContainer>
        </div>

        {auth.currentUser?.uid !== listing?.userRef && (
          <Link
            to={`/contact/${listing!.userRef}?listingName=${listing!.name}`}
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
