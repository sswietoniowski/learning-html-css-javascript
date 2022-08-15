import { useContext } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import Speaker from './Speaker';
import useRequestDelay, { REQUEST_STATUS } from '../hooks/useRequestDelay';

import { data } from '../../SpeakerData';
import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext';

const SpeakersList = () => {
  const {
    data: speakersData,
    requestStatus,
    error,
    updateRecord,
  } = useRequestDelay(1000, data);

  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

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
        {speakersData
          .filter((speaker) => {
            return (
              searchQuery === '' ||
              speaker.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
              speaker.last.toLowerCase().includes(searchQuery.toLowerCase())
            );
          })
          .filter((speaker) => {
            return (
              eventYear === '' ||
              speaker.sessions.find((session) => {
                return session.eventYear === eventYear;
              })
            );
          })
          .map(function (speaker) {
            return (
              <Speaker
                key={speaker.id}
                speaker={speaker}
                onFavoriteToggle={(doneCallback) =>
                  updateRecord(
                    {
                      ...speaker,
                      favorite: !speaker.favorite,
                    },
                    doneCallback
                  )
                }
              />
            );
          })}
      </div>
    </div>
  );
};

export default SpeakersList;
