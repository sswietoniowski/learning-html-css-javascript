import { Link } from 'react-router-dom';
import { ReactComponent as DeleteIcon } from '../assets/svg/deleteIcon.svg';
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg';
import bedIcon from '../assets/svg/bedIcon.svg';
import bathtubIcon from '../assets/svg/bathtubIcon.svg';

interface ListingItemProps {
  id: string;
  listing: {
    name: string;
    type: string;
    imageUrls: string[];
    location: string;
    offer: boolean;
    discountedPrice: number;
    regularPrice: number;
    bedrooms: number;
    bathrooms: number;
  };
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}

const ListingItem = ({ id, listing, onDelete, onEdit }: ListingItemProps) => {
  const {
    name,
    type,
    imageUrls,
    location,
    offer,
    discountedPrice,
    regularPrice,
    bedrooms,
    bathrooms,
  } = listing;

  const image = imageUrls[0];
  const price = offer ? discountedPrice : regularPrice;
  const priceString = `$${price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  return (
    <div className='categoryListing'>
      <Link to={`/category/${type}/${id}`} className='categoryListingLink'>
        <img src={image} alt={name} className='categoryListingImg' />
        <div className='categoryListingDetails'>
          <p className='categoryListingLocation'>{location}</p>
          <p className='categoryListingName'>{name}</p>
          <p className='categoryListingPrice'>
            {priceString}
            {type === 'rent' && '/Month'}
          </p>
          <div className='categoryListingInfoDiv'>
            <img src={bedIcon} alt='bed' />
            <p className='categoryListingInfoText'>
              {bedrooms > 1 ? `${bedrooms} Bedrooms` : '1 Bedroom'}
            </p>
            <img src={bathtubIcon} alt='bath' />
            <p className='categoryListingInfoText'>
              {bathrooms > 1 ? `${bathrooms} Bathrooms` : '1 Bathroom'}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          onClick={() => onDelete(id)}
          className='removeIcon'
          fill='rgb(231, 76, 60)'
        />
      )}
      {onEdit && (
        <EditIcon
          onClick={() => onEdit(id)}
          className='editIcon'
          fill='rgb(231, 76, 60)'
        />
      )}
    </div>
  );
};

export default ListingItem;
