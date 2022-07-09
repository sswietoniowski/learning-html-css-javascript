import React from 'react';

function FeedbackStats({ feedback }) {
  let average =
    feedback.length > 0
      ? feedback.reduce((accumulator, current) => {
          return accumulator + current.rating;
        }, 0) / feedback.length
      : 0;

  return feedback.length > 0 ? (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  ) : null;
}

export default FeedbackStats;
