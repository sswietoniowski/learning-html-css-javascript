import { useState } from 'react';

import SpeakersToolbar from './SpeakersToolbar';
import SpeakersList from './SpeakersList';

const Speakers = () => {
  const [showSessions, setShowSessions] = useState(false);

  return (
    <>
      <SpeakersToolbar
        showSessions={showSessions}
        setShowSessions={setShowSessions}
      />
      <SpeakersList showSessions={showSessions} />
    </>
  );
};

export default Speakers;
