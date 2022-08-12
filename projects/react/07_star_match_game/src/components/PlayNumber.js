// Color Theme
const colors = {
  available: 'lightgray',
  used: 'lightgreen',
  wrong: 'lightcoral',
  candidate: 'deepskyblue',
};

const PlayNumber = ({ number, status }) => {
  return (
    <button
      className='number'
      style={{ backgroundColor: colors[status] }}
      onClick={() => console.log(number)}
    >
      {number}
    </button>
  );
};

export default PlayNumber;
