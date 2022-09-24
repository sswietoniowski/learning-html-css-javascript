import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-none px-2 mx-2'>
          <FaGithub className='inline pr-2 text-3xl' />
          <Link className='text-lg font-bold align-middle' to='/'>
            {title}
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link className='btn btn-ghost btn-sm rounded-btn' to='/'>
              Home
            </Link>
            <Link className='btn btn-ghost btn-sm rounded-btn' to='/about'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
