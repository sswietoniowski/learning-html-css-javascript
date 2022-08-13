import { useState } from 'react';

import Header from './Header';
import SpeakersToolbar from './SpeakersToolbar';
import SpeakersList from './SpeakersList';
import { data } from '../../SpeakerData';

const Speakers = () => {
  const [showSessions, setShowSessions] = useState(false);
  const [theme, setTheme] = useState('light');

  return (
    <div className='container-fluid'>
      <Header />
      <SpeakersToolbar
        showSessions={showSessions}
        setShowSessions={setShowSessions}
        theme={theme}
        setTheme={setTheme}
      />
      <SpeakersList data={data} showSessions={showSessions} />
    </div>
  );
};

export default Speakers;
