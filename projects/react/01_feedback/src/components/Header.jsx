import PropTypes from 'prop-types';

function Header({ bgColor, text }) {
  const headerStyle = {
    backgroundColor: { bgColor },
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
