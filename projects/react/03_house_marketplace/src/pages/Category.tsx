import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  DocumentData,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

const Category = () => {
  const [listings, setListings] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        // get reference to the collection
        const listingsRef = collection(db, 'listings');

        // create a query
        const q = query(
          listingsRef,
          where('type', '==', categoryName),
          orderBy('timestamp', 'desc'),
          limit(10)
        );

        // execute the query
        const querySnapshot = await getDocs(q);

        let listings: DocumentData[] = [];

        querySnapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          return listings.push({ id: doc.id, data: doc.data() });
        });

        setListings(listings);
        setLoading(false);
      } catch (err) {
        toast.error('Could not fetch listings');
      }
    };

    fetchListing();
  }, [categoryName]);

  return (
    <div className='category'>
      <header>
        <p className='pageHeader'>
          {categoryName === 'rent' ? 'Places for rent' : 'Places for sale'}
        </p>
      </header>
      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <main>
          <ul className='categoryListings'>
            {listings.map((listing) => (
              <h3 key={listing.id}>{listing.data.name}</h3>
            ))}
          </ul>
        </main>
      ) : (
        <p>No listings for {categoryName}</p>
      )}
    </div>
  );
};

export default Category;
