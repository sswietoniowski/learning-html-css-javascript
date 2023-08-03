import { useContext } from 'react';

import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
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
      {/* file deepcode ignore UseNumberIsNan: this is just a demo code */}
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  ) : null;
}

export default FeedbackStats;
