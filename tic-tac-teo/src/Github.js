import React, { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const SearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const searchUser = () => {
    if (!searchValue) {
      setError('Please enter a username or email address.');
      return;
    } else {
      fetch(`https://api.github.com/search/users?q=${searchValue}`)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.items);
        })
        .catch((error) => {
          setError('An error occurred while fetching data.');
        });
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      &nbsp; &nbsp;

      <h1 className="text-2xl font-bold mr-4">GitHub User Search</h1>
      <input
        type="text"
        value={searchValue}
        onChange={SearchChange}
        placeholder="Enter Username or Email"
        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 mb-2"
      />
      <button
        onClick={searchUser}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Search
      </button>
      <p className="text-red-600 mt-2">{error}</p>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <a href={user.html_url} className="text-blue-500 hover:underline">
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;