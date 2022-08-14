import Spinner from 'react-bootstrap/Spinner';

import Speaker from './Speaker';
import useRequestSpeakers from './hooks/useRequestSpeakers';

const SpeakersList = ({ showSessions }) => {
  const { speakersData, isLoading, hasErrored, error, onFavoriteToggle } =
    useRequestSpeakers(1000);

  if (hasErrored) {
    return (
      <div className='text-danger'>
        ERROR: <b>Loading Speakers Data Failed: {error}</b>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center p-2'>
        <Spinner animation='border' />
      </div>
    );
  }

  return (
    <div className='container speakers-list'>
      <div className='row'>
        {speakersData.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => onFavoriteToggle(speaker.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpeakersList;
