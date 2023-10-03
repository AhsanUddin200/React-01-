import React from 'react';
import { Link } from 'react-router-dom';

function List() {
  return (
    <div>
      <h1>Routes List</h1>
      <ul>
        <li>
          <Link to="/app">App</Link>
        </li>
        <li>
          <Link to="/qa">Q.A</Link>
        </li>
        <li>
          <Link to="/quotes">Quotes</Link>
        </li>
        <li>
          <Link to="/table">Table</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/video">Video</Link>
        </li>
        <li>
          <Link to="/github">Github</Link>
        </li>
      </ul>
    </div>
  );
}

export default List;