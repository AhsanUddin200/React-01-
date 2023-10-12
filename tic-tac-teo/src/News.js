import React, { useState, useEffect } from 'react';

function App() {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  
  const apiKey = 'c61d22f602b64f319e82b8a8ec30ba46';

  const fetchNewsData = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)



      .then((response) => response.json())
      .then((data) => {
        setNewsData(data.articles);
      })
      .catch((error) => {
       
        setError('An error occurred while fetching news data.');
      });
  };

 

  useEffect(() => {
    fetchNewsData();
    const time = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
    <h1 className="text-2xl font-bold">Top Headlines</h1>
    <h1 className="text-2xl font-bold">Stay here</h1>
    <span className="text-lg font-bold ">{`${currentTime.getHours()}:${currentTime.getMinutes()}`}</span>
  
    {newsData.length === 0 ? (
      <p className="text-yellow-500">Loading...</p>
    ) : (
      <div>
        <ul>
          {newsData.map((article, index) => (
            <li key={index} className="mb-2">
              <div className="bg-white p-1 rounded-md shadow-md">
              
              <div class="xs:w-1/2 md:w-1/7 p-2">
        <div class="bg-white p-3 rounded-md">
        
          <h3 class="tracking-widest text-red-600 text-xs font-medium title-font ">Headlines</h3>
          <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{article.title}</h2>
          <p class="leading-relaxed text-base">{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Click here for read more</a>
        </div>
      </div>
         
              </div>
            </li>
          ))}
        </ul>
      </div>
    )}
  
    {error && <p className="text-red-600 mt-2">{error}</p>}
  </div>
  
   
    
  );
}

export default App;
