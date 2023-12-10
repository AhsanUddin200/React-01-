import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        let timeInterval;

        if (isRunning) {
            timeInterval = setInterval(() => {
                setCurrentTime(new Date().toLocaleTimeString());
            }, 1000);
        } else {
            clearInterval(timeInterval);
        }

        return () => clearInterval(timeInterval);
    }, [isRunning]);

    const changeTime = () => {
        setIsRunning(!isRunning);
    }

    return (
        
        <div className="text-center mt-4 bg-gradient-to-b from-cyan-200 to-gray-800 bg-gray-400 p-4 rounded-xl max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-2">{currentTime}</h1>
            <button
                className={`bg-${isRunning ? 'red' : 'blue'}-500 hover:bg-${isRunning ? 'red' : 'blue'}-700 text-white font-bold py-2 px-4 rounded`}
                onClick={changeTime}
            >
                {isRunning ? "Stop" : "Start"}
            </button>
        </div>
    );
}

export default Stopwatch;
