import PropTypes from 'prop-types';

import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => {
        return (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeedbackList;
