import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  DocumentData,
  startAfter,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import ListingItem from '../components/ListingItem';

const Category = () => {
  const [listings, setListings] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListing, setLastFetchedListing] =
    useState<DocumentData | null>(null);
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
          limit(2)
        );

        // execute the query
        const querySnapshot = await getDocs(q);

        const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        setLastFetchedListing(lastVisible);

        let listings: DocumentData[] = [];

        // file deepcode ignore ForEachReturns: this is just a demo code
        querySnapshot.forEach((doc) => {
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

  // Pagination / Load More
  const onFetchMoreListings = async () => {
    try {
      // get reference to the collection
      const listingsRef = collection(db, 'listings');

      // create a query
      const q = query(
        listingsRef,
        where('type', '==', categoryName),
        orderBy('timestamp', 'desc'),
        startAfter(lastFetchedListing),
        limit(10)
      );

      // execute the query
      const querySnapshot = await getDocs(q);

      const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastFetchedListing(lastVisible);

      let listings: DocumentData[] = [];

      querySnapshot.forEach((doc) => {
        return listings.push({ id: doc.id, data: doc.data() });
      });

      setListings((prevListings) => [...prevListings, ...listings]);
      setLoading(false);
    } catch (err) {
      toast.error('Could not fetch listings');
    }
  };

  const listingItems =
    listings && listings.length > 0 ? (
      <>
        <main>
          <ul className='categoryListings'>
            {listings.map((listing) => (
              <ListingItem
                key={listing.id}
                id={listing.id}
                listing={listing.data}
              />
            ))}
          </ul>
        </main>
        <br />
        <br />
        {lastFetchedListing && (
          <p className='loadMore' onClick={onFetchMoreListings}>
            Load More
          </p>
        )}
      </>
    ) : (
      <p>No listings for {categoryName}</p>
    );

  return (
    <div className='category'>
      <header>
        <p className='pageHeader'>
          {categoryName === 'rent' ? 'Places for rent' : 'Places for sale'}
        </p>
      </header>
      {loading ? <Spinner /> : listingItems}
    </div>
  );
};

export default Category;
