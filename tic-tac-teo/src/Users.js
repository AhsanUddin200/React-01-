import { useState } from "react";

export default function Users() {
  const [task, setCurrentTasks] = useState("");
  const [list, setList] = useState([]);

  const inputdata = (event) => {
    setCurrentTasks(event.target.value);
  };

  const sumbitbutton = () => {
    if (task.trim() !==""){
    const newTask = {
      task: task,
      status: true,
    };
    setList([...list, newTask]);
    setCurrentTasks("");
}
  };

  const deletebutton = (index) => {
    const updatedarray = [...list];
    updatedarray.splice(index, 1);
    setList(updatedarray);
  };

  const donebutton = (index) => {
    const updatedarray = [...list]
    updatedarray[index].status= !updatedarray[index].status;
    if(!updatedarray[index].status){
        const donetask=updatedarray.splice(index,1);
        updatedarray.unshift(...donetask)
    }
    setList(updatedarray);
  }



 
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div class="w-full max-w-xs bg-gray-300 ">
              <h2 className="mb-4 text-center">
          <span className="bg-blue-500 text-blue px-4 py-1 font-bold mr-2 ">To do List</span>
        </h2>


              <label htmlFor="userinput" className="mb-4" >
                <input
                  type="text"
                  placeholder="Write here..."
                  value={task}
                  onChange={inputdata}
                  className="border border-gray-300 rounded px-4 py-1 focus:outline-none focus:border-blue-500 mr-2"
                ></input>
      </label>
      <button onClick={sumbitbutton} className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ml-2"
      >Sumbit</button>

      <ul>
        {list.map((addedTask, index) => (
          <li key={index}
          className="flex items-center space-x-2" >
            <span style={{textDecoration : addedTask.status ? "" : "line-through"}}>
            {addedTask.task}
        
            
            </span>
            {addedTask.status && (
            <button onClick={() => deletebutton(index)} className="mb-4 flex items-center space-x-9 bg-red-500 text-white px-2 py-0.1 rounded hover:bg-yellow-600 focus:outline-none focus:bg-blue-600 mr-2">Delete</button>
            )}
            {addedTask.status && (
            <button onClick={() => donebutton(index) }className="mb-4  bg-blue-500 text-white px-2 py-0.1  rounded hover:bg-green-600 focus:outline-none focus:bg-blue-600">Done</button>
            )}
          </li>
        ))}
    
      </ul>

      {}
      </div>
       
    </div>
  );
}
    