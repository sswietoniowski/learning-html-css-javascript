import { useState } from 'react';

import SpeakersToolbar from './SpeakersToolbar';
import SpeakersList from './SpeakersList';

const Speakers = ({ theme, setTheme }) => {
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
