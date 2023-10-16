import React, { useState } from 'react';

function Library() {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');
  const [isInputHidden, setIsInputHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsInputHidden(true); 
    setIsLoading(true);
    fetch(`http://openlibrary.org/search.json?q=${search}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBooks(data.docs);
      })
      .catch((err) => {
        setError('Error fetching data. Please try again later.');
      });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow p-6">
        <h1 className="text-3xl mb-4">Library Book Search</h1>
        <div className="mb-4">
            
        {!isInputHidden ? (
          <div className="mb-4">
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2.5"
              placeholder="Search for books"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2 ml-2"
            >
              Search
            </button>
          </div>
        ) : null}   
        {isLoading ? (
          <p className="text-yellow-600">Loading...</p>
        ) : null}
        </div>
        {error && <p>{error}</p>}
        <ul>
          {books.map((book) => (
            <li key={book.key}  className="mb-4">
         
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="text-gray-600">Author: {book.author_name}</p>
              
              { <p className="text-gray-600">Publish Year: {book.publish_year}</p> }
             
              <p className="text-gray-600">Language: {book.language}</p>
              <p className="text-gray-600">Publisher: {book.publisher}</p>
              {/* <p className="text-gray-600">Publish Place: {book.publish_place}</p> */}
              <hr className="my-6" />
             
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Library;
