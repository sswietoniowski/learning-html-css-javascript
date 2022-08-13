import { useState } from 'react';

import Header from './Header';
import SpeakersToolbar from './SpeakersToolbar';
import SpeakersList from './SpeakersList';
import { data } from '../../SpeakerData';

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
      <SpeakersList data={data} showSessions={showSessions} />
    </>
  );
};

export default Speakers;
