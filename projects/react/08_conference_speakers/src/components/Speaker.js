import React, { useState } from 'react';

const Session = ({ title, room }) => {
  return (
    <span className='session w-100'>
      {title} <strong>Room: {room}</strong>
    </span>
  );
};

const Sessions = ({ sessions }) => {
  return (
    <div className='sessionBox card h-250'>
      <Session title={sessions[0].title} room={sessions[0].room.name} />
    </div>
  );
};

const SpeakerImage = ({ id, first, last }) => {
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

function SpeakerFavorite({ favorite, onFavoriteToggle }) {
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
            onFavoriteToggle(doneCallback);
          }
        }}
      >
        <i
          className={
            favorite === true ? 'fa fa-star orange' : 'fa fa-star-o orange'
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

const SpeakerDemographics = ({
  first,
  last,
  bio,
  company,
  twitterHandle,
  favorite,
  onFavoriteToggle,
}) => {
  return (
    <div className='speaker-info'>
      <div className='d-flex justify-content-between mb-3'>
        <h3 className='text-truncate w-200'>
          {first} {last}
        </h3>
      </div>
      <SpeakerFavorite
        favorite={favorite}
        onFavoriteToggle={onFavoriteToggle}
      />
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

const Speaker = ({ speaker, showSessions, onFavoriteToggle }) => {
  const { id, first, last, bio, company, twitterHandle, favorite } = speaker;
  return (
    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12'>
      <div className='card card-height p-4 mt-4'>
        <SpeakerImage id={id} first={first} last={last} />
        <SpeakerDemographics {...speaker} onFavoriteToggle={onFavoriteToggle} />
      </div>
      {showSessions && <Sessions sessions={speaker.sessions} />}
    </div>
  );
};

export default Speaker;
