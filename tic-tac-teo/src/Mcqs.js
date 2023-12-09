import React, { useState, useEffect } from 'react';

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizEnded, setQuizEnded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      fetch('https://opentdb.com/api.php?amount=10')
        .then((response) => response.json())
        .then((data) => {
          setQuestions(data.results);
          setLoading(false);
        })
        .catch((error) => {
          setError('An error occurred while fetching data. Please try again later.');
        });
    };

    fetchData();
  }, []);

  const againPlay = () => {
    setCurrentQuestionIndex(0);
    setQuizEnded(false);
    setSelectedAnswer(null);
    setScore(0);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }
    if (currentQuestionIndex === questions.length - 1) {
      setQuizEnded(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    }
  };



  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-sm bg-blue-200 p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-96 h-96">
        <div className="flex justify-center">
          <h1 className="bg-red-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Quiz</h1>
        </div>
        <br></br>
       
        {loading ? (
          <p className="text-red-500 flex justify-center"><strong>Questions Loading...</strong></p>
        ) : error ? (
          <p>{error}</p>
        ) : quizEnded ? (
          <div>
            <p className="flex justify-center"><strong>Quiz End</strong></p><br></br>
            <br></br>
            <p  className="flex justify-center"> Your Score: {score} / {questions.length}</p><br></br> 
            <br></br>
            <div className="flex justify-center">
              <button onClick={againPlay} className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">Play again</button>
            </div>
          </div>
        ) : (
          <div>
            <p>Question {currentQuestionIndex + 1} out of {questions.length}:</p>
            <br></br>
            <p>{questions[currentQuestionIndex].question}</p>
            <br></br>
            {questions[currentQuestionIndex].type === 'multiple' ? (
              <ul>
                {questions[currentQuestionIndex].incorrect_answers.map((option) => (
                  <li key={option}>
                    <label>
                      <input
                        type="radio"
                        name="answer"
                        value={option}
                        checked={selectedAnswer === option}
                        onChange={() => handleAnswerSelect(option)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
                <li>
                  <label>
                    <input
                      type="radio"
                      name="answer"
                      value={questions[currentQuestionIndex].correct_answer}
                      checked={selectedAnswer === questions[currentQuestionIndex].correct_answer}
                      onChange={() => handleAnswerSelect(questions[currentQuestionIndex].correct_answer)}
                    />
                    {questions[currentQuestionIndex].correct_answer}
                  </label>
                </li>
              </ul>
            ) : (
              <div>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value="True"
                    checked={selectedAnswer === 'True'}
                    onChange={() => handleAnswerSelect('True')}
                  />
                  True
                </label>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value="False"
                    checked={selectedAnswer === 'False'}
                    onChange={() => handleAnswerSelect('False')}
                  />
                  False
                </label>
              </div>
            )}
            {selectedAnswer && (
              <div className="flex justify-center">
                <button
                  onClick={handleNextQuestion}
                  className="bg-blue-500 text-white font-bold py-0 px-4 rounded w-20 h-17 hover:bg-blue-900"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;