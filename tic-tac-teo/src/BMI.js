import React, { useState } from 'react';

function BMI() {
  const [error, setError] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');

  const handleInput = (event) => {
    const { name, value } = event.target;
    const numericValue = value.replace(/[^0-9.]/g, '');

    if (name === 'weight') {
      setWeight(numericValue);
    } else if (name === 'height') {
      setHeight(numericValue);
    }
  };

  const convertFeetToMeters = (feet) => {
  
    return (feet * 0.3048);
  };

  const calculateBMI = () => {
    if (!weight || !height) {
      setError('Enter your weight (kg) and height (m).');
      setBmi('');
      return;
    }

    const weightInKg = weight;
    const heightInFeet = height;
    const heightInMeters = convertFeetToMeters(heightInFeet);

    const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm bg-blue-100 p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-96 h-96">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">BMI Calculator</h1>
          <p>Body Mass Index</p>
        </div>

        <input
          type="text"
          name="weight"
          placeholder="Enter your weight (kg)"
          value={weight}
          onChange={handleInput}
          className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 mb-5"
        />

        <input
          type="text"
          name="height"
          placeholder="Enter your height (feet)"
          value={height}
          onChange={handleInput}
          className="w-full px-3 py-2 mt-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500 mb-5"
        />

        <button onClick={calculateBMI} className="w-full bg-blue-500 text-white font-semibold px-4 py-2 mt-4 rounded-lg hover:bg-blue-600">
          Click here for BMI
        </button>

        <p className="text-red-500 mt-2">{error}</p>
        {bmi && <p className="mt-9 text-xl text-blue-900 text-center">Your BMI is: {bmi}</p>}
      </div>
    </div>
  );
}

export default BMI;
