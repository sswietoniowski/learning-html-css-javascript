import { useState, useContext } from 'react';

import SpeakersToolbar from './SpeakersToolbar';
import SpeakersList from './SpeakersList';
import ThemeContext from '../context/ThemeContext';

const Speakers = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showSessions, setShowSessions] = useState(false);

  return (
    <>
      <SpeakersToolbar
        showSessions={showSessions}
        setShowSessions={setShowSessions}
        theme={theme}
        setTheme={setTheme}
      />
      <SpeakersList showSessions={showSessions} />
    </>
  );
};

export default Speakers;
