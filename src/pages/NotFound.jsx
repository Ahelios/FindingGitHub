import {FaHome} from 'react-icons/fa';
import { Link } from "react-router";

function NotFound() {
  return (
    <div className='hero '>
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold mb-8">
            Page Not found smth went wrong!
          </h1>
          <p className='text-5xl mb-8'> Page not found 404</p>
          <Link to='/'className='btn btn-primary btn-lg'>
            <FaHome className="mr-2"/>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound;
