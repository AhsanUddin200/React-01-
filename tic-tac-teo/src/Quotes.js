import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function Quotes() {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch("https://type.fit/api/quotes")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {      
                setQuote(data[0].text)
            });
    }, []);

    const handlefunction = () => {
        fetch("https://type.fit/api/quotes")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            setQuote(data[Math.floor(Math.random() * data.length)].text)
        });
    };

    return (
        <div className="p-4 text-center">
            <Link to="/quotes" className="text-blue-500 hover:underline">Quotes</Link>
            <p className="text-lg font-semibold mt-4">{quote}</p>
            <button
                onClick={handlefunction}
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
                New Quote
            </button>
        </div>
    );
}
