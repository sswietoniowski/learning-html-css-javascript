import { data } from '../../SpeakerData';
import Speaker from './Speaker';

const SpeakersList = () => {
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

export default SpeakersList;
