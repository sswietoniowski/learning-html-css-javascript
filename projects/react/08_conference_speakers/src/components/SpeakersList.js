import Speaker from './Speaker';
import { data } from '../../SpeakerData';

const SpeakersList = ({ showSessions }) => {
  return (
    <div className='container speakers-list'>
      <div className='row'>
        {data.map(function (speaker) {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpeakersList;
