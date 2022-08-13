const SpeakersToolbar = ({
  showSessions,
  setShowSessions,
  theme,
  setTheme,
}) => {
  const switchShowSessions = (event) => {
    setShowSessions(event.target.checked);
  };

  const switchTheme = (event) => {
    setTheme(event.target.value);
  };

  return (
    <section className='toolbar dark-theme-header'>
      <div className='container'>
        <div className='justify-content-between'>
          <ul className='toolrow d-flex flex-column flex-lg-row'>
            <li className='d-flex flex-column flex-md-row'>
              <b>Show Sessions&nbsp;&nbsp;</b>
              <label className='fav'>
                <input
                  type='checkbox'
                  checked={showSessions}
                  onChange={switchShowSessions}
                />
                <span className='switch'></span>
              </label>
            </li>
            <li className='d-flex flex-column flex-md-row ml-sm-5 ml-0'>
              <strong>Theme</strong>
              <label className='dropdown'>
                <select
                  className='form-control theme'
                  value={theme}
                  onChange={switchTheme}
                >
                  <option value='light'>Light</option>
                  <option value='dark'>Dark</option>
                </select>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpeakersToolbar;
