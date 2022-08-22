import React, { useState, useContext } from 'react';

import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext';
import SpeakerProvider, { SpeakerContext } from '../contexts/SpeakerContext';
import SpeakerDelete from './SpeakerDelete';

const Session = ({ title, room }) => {
  return (
    <span className='session w-100'>
      {title} <strong>Room: {room.name}</strong>
    </span>
  );
};

const Sessions = () => {
  const { eventYear } = useContext(SpeakerFilterContext);
  const {
    speaker: { sessions },
  } = useContext(SpeakerContext);

  return (
    <div className='sessionBox card h-250'>
      {sessions
        .filter(function (session) {
          return eventYear === '' || session.eventYear === eventYear;
        })
        .map(function (session) {
          return (
            <div className='session w-100' key={session.id}>
              <Session {...session} />
            </div>
          );
        })}
    </div>
  );
};

const SpeakerImage = () => {
  const {
    speaker: { id, first, last },
  } = useContext(SpeakerContext);

  return (
    <div className='speaker-img d-flex flex-row justify-content-center align-items-center h-300'>
      <img
        className='contain-fit'
        src={`/images/speaker-${id}.jpg`}
        width='300'
        alt={`${first} ${last}`}
      />
    </div>
  );
};

function SpeakerFavorite() {
  const { speaker, updateRecord } = useContext(SpeakerContext);
  const [inTransition, setInTransition] = useState(false);

  const doneCallback = () => {
    setInTransition(false);
  };

  return (
    <div className='action padB1'>
      <span
        onClick={() => {
          if (!inTransition) {
            setInTransition(true);
            updateRecord(
              {
                ...speaker,
                favorite: !speaker.favorite,
              },
              doneCallback
            );
          }
        }}
      >
        <i
          className={
            speaker.favorite === true
              ? 'fa fa-star orange'
              : 'fa fa-star-o orange'
          }
        />{' '}
        Favorite{' '}
        {inTransition === true ? (
          <span className='fas fa-circle-notch fa-spin' />
        ) : null}
      </span>
    </div>
  );
}

const SpeakerDemographics = () => {
  const {
    speaker: { first, last, bio, company, twitterHandle, favorite },
  } = useContext(SpeakerContext);

  return (
    <div className='speaker-info'>
      <div className='d-flex justify-content-between mb-3'>
        <h3 className='text-truncate w-200'>
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite />
      <div>
        <p className='card-description'>{bio}</p>
        <div className='social d-flex flex-row mt-4'>
          <div className='company'>
            <h5>Company</h5>
            <h6>{company}</h6>
          </div>
          <div className='twitter'>
            <h5>Twitter</h5>
            <h6>
              <a href={`https://twitter.com/${twitterHandle}`}>
                @{twitterHandle}
              </a>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

const Speaker = ({ speaker, insertRecord, updateRecord, deleteRecord }) => {
  const { showSessions } = useContext(SpeakerFilterContext);
  return (
    <SpeakerProvider
      speaker={speaker}
      insertRecord={insertRecord}
      updateRecord={updateRecord}
      deleteRecord={deleteRecord}
    >
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12'>
        <div className='card card-height p-4 mt-4'>
          <SpeakerImage />
          <SpeakerDemographics />
        </div>
        {showSessions && <Sessions />}
        <SpeakerDelete />
      </div>
    </SpeakerProvider>
  );
};

export default Speaker;
