import Header from './Header';
import SpeakersToolbar from './SpeakersToolbar';
import SpeakersList from './SpeakersList';
import { data } from '../../SpeakerData';

const Speakers = () => {
  return (
    <div className='container-fluid'>
      <Header />
      <SpeakersToolbar />
      <SpeakersList data={data} />
    </div>
  );
};

export default Speakers;
