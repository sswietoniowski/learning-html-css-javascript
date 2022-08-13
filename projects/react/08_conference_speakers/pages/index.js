import { data } from '../SpeakerData';

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

const SpeakerImage = (props) => {
  const { id, first, last } = props;
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

const SpeakerInfo = (props) => {
  const { first, last, bio, company, twitterHandle, favorite } = props;
  return (
    <div className='speaker-info'>
      <div className='d-flex justify-content-between mb-3'>
        <h3 className='text-truncate w-200'>
          {first} {last}
        </h3>
      </div>
      <div>
        <p>
          {bio} {company} {twitterHandle} {favorite}
        </p>
      </div>
    </div>
  );
};

const Speaker = ({ speaker }) => {
  return (
    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12'>
      <div className='card card-height p-4 mt-4'>
        <SpeakerImage {...speaker} />
        <SpeakerInfo {...speaker} />
      </div>
      <Sessions sessions={speaker.sessions} />
    </div>
  );
};

const IndexPage = () => {
  return (
    <div className='container speakers-list'>
      <div className='row'>
        {data.map(function (speaker) {
          return <Speaker key={speaker.id} speaker={speaker} />;
        })}
      </div>
    </div>
  );
};

export default IndexPage;
