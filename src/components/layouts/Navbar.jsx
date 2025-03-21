import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title = 'FindInGithub' }) => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none flex items-center mx-2 px-2">
          <FaGithub className="inline pr-2 text-3xl"/>
          <Link to="/" className="text-lg font-bold allign-middle">
            {title}
          </Link>
        </div>
      </div>
      <div className="flex-1 px-1 mx-2">
        <div className="flex justify-end">
          <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
