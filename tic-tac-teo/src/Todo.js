import React, { useState, useEffect } from "react";

function Todo() {
  const [userData, setUserData] = useState([]);
  const [todos, setTodos] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [newTodo, setNewTodo] = useState("");
  const [userCompletedTodos, setUserCompletedTodos] = useState({});
  const [savedNewTodo, setSavedNewTodo] = useState(""); 

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        setError("An error occurred while fetching user data.");
      });
  };

  const fetchTodosData = (userId) => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        setError("An error occurred while fetching todos.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleClick = (userId) => {
    if (selectedUser === userId) {
      setSelectedUser(null);
      setTodos([]);
      if (savedNewTodo) {
        setNewTodo(savedNewTodo);
      }
    } else {
      setSelectedUser(userId);
      fetchTodosData(userId);
    }
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
     
      const isCompleted = false || userCompletedTodos[selectedUser];

      const newTodoItem = {
        userId: selectedUser,
        id: todos.length + 1,
        title: newTodo,
        completed: isCompleted,
      };

     
      setTodos([...todos, newTodoItem]);

    
      setNewTodo("");
    }
  };

  const toggleUserCompleted = () => {
    
    setUserCompletedTodos({
      ...userCompletedTodos,
      [selectedUser]: !userCompletedTodos[selectedUser],
    });
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center">
      <div className="flex flex-col justify-between p-9 leading-normal">
        <div className="bg-white rounded-lg flex items-center justify-center">
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            About User
          </h5>
        </div>
        <p className="mb-3 font-normal text-black dark:text-black">
          <ul className="mt-4">
            {userData.map((user) => (
              <li key={user.id} className="mb-6 p-14 rounded-lg bg-white shadow">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">User Information</h5>

                    
                     <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Address:</strong> {user.address.street},{" "}
                  {user.address.suite},{user.address.city}, {user.address.zipcode} (
                  {user.address.geo.lat}, {user.address.geo.lng})
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                  <strong>Website:</strong> {user.website}
                </p>
                <p>
                  <strong>Company:</strong> {user.company.name}
                </p>
                <p>
                  {user.company.catchPhrase} {user.company.bs}
                </p>

                <button
                  className={`p-1 m-1 rounded cursor-pointer ${
                    selectedUser === user.id
                      ? "bg-red-500 text-black hover-bg-blue-600 hover-text-white"
                      : "bg-blue-500 text-white hover-bg-red-600 hover-text-black"
                  }`}
                  onClick={() => handleClick(user.id)}
                  disabled={loading}
                >
                  {selectedUser === user.id ? "Hide Todo" : "Show Todo"}
                </button>

                {selectedUser === user.id && (
                  <div>
                    <ul>
                      {todos.map((todo) => (
                        <li
                          key={todo.id}
                          className="mb-2 p-2 rounded-lg bg-white shadow"
                        >
                          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Todo Information</h5>
                          <div>User ID: {todo.userId}</div>
                          <div>ID: {todo.id}</div>
                          <div>Title: {todo.title}</div>
                          <div>Completed: {todo.completed ? todo.completed.toString() : 'False'}</div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-2.5"
                        placeholder="Add a new todo"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                      />
                      <button
                        onClick={addTodo}
                        className="bg-blue-500 hover-bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2 ml-2"
                      >
                        Add Todo
                      </button>
                    </div>
                    <div className="mt-4">
                      <label>
                        <input
                          type="checkbox"
                          checked={false||userCompletedTodos[selectedUser] }
                          onChange={toggleUserCompleted}
                        />
                        Mark this todos as completed
                      </label>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Todo;