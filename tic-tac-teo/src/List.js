import React from 'react';
import { Link } from 'react-router-dom';

function List() {
  return (
    <div>
      <h1>Routes</h1>
      <ul className='space-y-4'>
        <li>
          <Link to="/app" className="text-blue-500 hover:text-red-700">App</Link>
        </li>
        <li>
          <Link to="/qa" className="text-blue-500 hover:text-red-700">Q.A</Link>
        </li>
        <li>
          <Link to="/quotes" className="text-blue-500 hover:text-red-700">Quotes</Link>
        </li>
        <li>
          <Link to="/table" className="text-blue-500 hover:text-red-700">Table</Link>
        </li>
        <li>
          <Link to="/users" className="text-blue-500 hover:text-red-700">Users</Link>
        </li>
        <li>
          <Link to="/video" className="text-blue-500 hover:text-red-700">Video</Link>
        </li>
        <li>
          <Link to="/github" className="text-blue-500 hover:text-red-700">Github</Link>
        </li>
      </ul>
    </div>
  );
}

export default List;