function Header(props) {
  return (
    <header>
      <div className='container'>
        <h2>{props.text || 'Feedback UI'}</h2>
      </div>
    </header>
  );
}

export default Header;
