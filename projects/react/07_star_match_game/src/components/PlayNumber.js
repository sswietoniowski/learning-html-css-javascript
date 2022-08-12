const PlayNumber = ({ number }) => {
  return (
    <button className='number' onClick={() => console.log(number)}>
      {number}
    </button>
  );
};

export default PlayNumber;
