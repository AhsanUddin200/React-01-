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
    <div>
       
      <h2>To do List</h2>
      <label htmlFor="userinput">
        <input
          type="text"
          placeholder="Write here..."
          value={task}
          onChange={inputdata}
        ></input>
      </label>
      <button onClick={sumbitbutton}>Sumbit</button>

      <ul>
        {list.map((addedTask, index) => (
          <li key={index}>
            <span style={{textDecoration : addedTask.status ? "" : "line-through"}}>
            {addedTask.task}
        
            
            </span>
            {addedTask.status && (
            <button onClick={() => deletebutton(index)}>Delete</button>
            )}
            {addedTask.status && (
            <button onClick={() => donebutton(index)}>Done</button>
            )}
          </li>
        ))}
    
      </ul>

      {}
    </div>
  );
}
    