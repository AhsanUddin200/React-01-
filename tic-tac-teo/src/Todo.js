import React, { useState, useEffect } from "react";

function Todo() {
  const [userData, setUserData] = useState([]);
  const [todos, setTodos] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState("");

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
    fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        setError("An error occurred while fetching comments.");
      });
  };

  useEffect(() => {
    fetchUserData();
    fetchTodosData();
  }, []);

  const handleClick = (userId) => {
    if (selectedUser === userId) {
      setSelectedUser(null);
      setTodos([]);
    } else {
      setSelectedUser(userId);
      fetchTodosData(userId);
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center">
 
      

   
    <div class="flex flex-col justify-between p-9 leading-normal">
    <div className="bg-white rounded-lg flex items-center justify-center">
  <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
    About User
  </h5>
</div>
        <p class="mb-3 font-normal text-black dark:text-black"> <ul className="mt-4">
        {userData.map((user) => (
          <li key={user.id} className="mb-6 p-14 rounded-lg bg-white shadow">
            <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">User Informotion</h5>
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
                  ? "bg-red-500 text-black  hover:bg-blue-600 hover:text-white"
                  : "bg-blue-500 text-white hover:bg-red-600 hover:text-black"
              }`}
              onClick={() => handleClick(user.id)}
            >
              {selectedUser === user.id ? "Hide Todo" : "Show Todo"}
            </button>
            {selectedUser === user.id && (
              <ul>
                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="mb-2 p-2 rounded-lg bg-white shadow"
                  >
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Todo Informotion</h5>
                    <div>User ID: {todo.userId}</div>
                    <div>ID: {todo.id}</div>
                    <div>Title: {todo.title}</div>
                    <div>Completed: {todo.completed.toString()}</div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>.</p>
    </div>


      


   
    </div>
    
  );
}

export default Todo;
