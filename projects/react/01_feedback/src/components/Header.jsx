import PropTypes from 'prop-types';

function Header({ text }) {
  const headerStyle = {
    backgroundColor: 'blue',
    color: 'red',
  };

  return (
    <header style={headerStyle}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
