import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
  let average =
    feedback.length > 0
      ? feedback.reduce((accumulator, current) => {
          return accumulator + current.rating;
        }, 0) / feedback.length
      : 0;

  average = average.toFixed(1).replace(/[.,]0*$/, '');

  return feedback.length > 0 ? (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  ) : null;
}

FeedbackStats.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeedbackStats;
