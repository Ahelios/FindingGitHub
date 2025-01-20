import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChage = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      alert('Please enter something');
    } else {
      searchUsers(text);

      setText('');
    }
  };

  return (
    <div className="grid grid-cols-1 xl:gird-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                id="search"
                value={text}
                onChange={handleChage}
                className="input input-md input-primary w-full pr-40 bg-gray-200"
                placeholder="Search..."
                required
              />
              <button
                type="submit"
                className="btn btn-md ml-2 right-0  w-30 absolute rounded-l-none animate-pulse"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
