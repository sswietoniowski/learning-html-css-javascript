import Spinner from 'react-bootstrap/Spinner';

import Speaker from './Speaker';
import useRequestSpeakers, { REQUEST_STATUS } from './hooks/useRequestSpeakers';

const SpeakersList = ({ showSessions }) => {
  const { speakersData, requestStatus, error, onFavoriteToggle } =
    useRequestSpeakers();

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className='text-danger'>
        ERROR: <b>Loading Speakers Data Failed: {error}</b>
      </div>
    );
  }

  if (requestStatus === REQUEST_STATUS.LOADING) {
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
