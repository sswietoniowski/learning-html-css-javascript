import utils from '../utils';

const StarsDisplay = ({ count }) => {
  return (
    <>
      {utils.range(1, count).map((starId) => (
        <div key={starId} className='star' />
      ))}
    </>
  );
};

export default StarsDisplay;
