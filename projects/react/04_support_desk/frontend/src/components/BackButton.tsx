import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BackButton: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Link to={url} className='btn btn-reverse btn-back'>
      <FaArrowCircleLeft /> Back
    </Link>
  );
};

export default BackButton;
