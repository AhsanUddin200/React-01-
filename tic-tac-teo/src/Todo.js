import React, { useState, useEffect } from "react";

function Todo() {
  const [todoData, setTodoData] = useState([]);
  const [error, setError] = useState("");
  const [clickedTodoId, setClickedTodoId] = useState('id');

  const fetchTodoData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodoData(data);
      })
      .catch((error) => {
        setError("An error occurred while fetching todo data.");
      });
  };

  useEffect(() => {
    fetchTodoData();
  }, []);

  function handleTodoClick(id) {
    if (clickedTodoId === id) {
    
      setClickedTodoId(null);
    } else {
      setClickedTodoId(id);
    }
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {todoData ? ( 
      <ul>
        {todoData.map((todo) => {
          return (
            <li key={todo.id} className="mb-2 p-2 rounded-lg bg-white shadow">
              User ID: {todo.userId}
              <br />
              <button
                onClick={() => handleTodoClick(todo.id)}
                className="bg-blue-700 hover:bg-blue-300 text-white font-py-1 px-1 rounded"
              >
                Show Details
              </button>
              {clickedTodoId === todo.id && (
                <div>
                  <div>id: {todo.id}</div>
                  <div>title: {todo.title}</div>
                  <div>completed: {todo.completed.toString()}</div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      ):(
        <p>Loading</p>
      )}
    </div>
  );
}

export default Todo;
