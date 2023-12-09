import React, { useState, useEffect } from 'react';


const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        let Timeinterval;

        if (isRunning) {
            Timeinterval = setInterval(() => {
                setCurrentTime(new Date().toLocaleTimeString());
            }, 1000);
        } else {
            clearInterval(Timeinterval);
        }

        return () => clearInterval(Timeinterval);
    }, [isRunning]);

    const ChangeTime = () => {
        setIsRunning(!isRunning);
    }

    return (
        <div className="text-center mt-4"> 
            <h1 className="text-3xl font-bold mb-2">{currentTime}</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={ChangeTime}>
                {isRunning ? "Stop" : "Start"}
            </button>
        </div>
    );
}

export default Stopwatch;

// import React, { useState, useEffect } from 'react';

// function App() {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((productData) => {
//         setProducts(productData);
//       })
//       .catch((err) => {
//         setError(err);
//       });
//   };

//   return (
//     <div>
//       <h1>Maybelline Products</h1>
//       {error ? (
//         <p>Error: {error.message}</p>
//       ) : products.length > 0 ? (
//         <ul>
//           {products.map((product) => (
//             <li key={product.id}>
//                 <h2><strong>Product brand:</strong>  {product.brand}</h2>
//                 <h2><strong>Product ID:</strong>  {product.id}</h2>
//               <h2><strong>Product Name:</strong>  {product.name}</h2>
//               <p><strong>Price of product: </strong>{product.price}</p>
        

//               <img src={product.image_link} alt={product.name} />
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading products...</p>
//       )}
//     </div>
//   );
// }

// export default App;
