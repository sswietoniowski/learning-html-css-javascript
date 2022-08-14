import Spinner from 'react-bootstrap/Spinner';

import Speaker from './Speaker';
import useRequestDelay, { REQUEST_STATUS } from './hooks/useRequestDelay';

import { data } from '../../SpeakerData';

const SpeakersList = ({ showSessions }) => {
  const { data, requestStatus, error, updateRecord } = useRequestDelay();

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
        {data.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => updateRecord(speaker)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpeakersList;
