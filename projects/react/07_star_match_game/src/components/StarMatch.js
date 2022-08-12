import { useState } from 'react';

import './StarMatch.css';
import StarsDisplay from './StarsDisplay';
import PlayNumber from './PlayNumber';
import utils from '../utils';

// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

const StarMatch = () => {
  const [stars] = useState(utils.random(1, 9));
  return (
    <div className='game'>
      <div className='help'>
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className='body'>
        <div className='left'>
          <StarsDisplay count={stars} />
        </div>
        <div className='right'>
          {utils.range(1, stars).map((number) => (
            <PlayNumber key={number} number={number} />
          ))}
        </div>
      </div>
      <div className='timer'>Time Remaining: 10</div>
    </div>
  );
};

export default StarMatch;
