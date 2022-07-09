import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

import Card from './shared/Card';

function FeedbackItem({ item, handleDelete }) {
  const handleClick = (id) => {
    handleDelete(id);
  };

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => handleClick(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeedbackItem;
