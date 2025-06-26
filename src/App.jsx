/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";





function App() {

  const [tasks,setTasks] = useState(initialTasks);



  const handleChangeTask = (task) => {
    const nextTasks = tasks.map((t)=>{
      if(t.id === task.id){
        return task;
      }else{
        return t;
      }
    })

    setTasks(nextTasks);
  }

  return (
    <>
    <h1>Prague itinerary</h1>
    <AddTask ></AddTask>
    <TaskList tasks={tasks} onChangeTask={handleChangeTask}></TaskList>
    
    
    </>
  );
}

export default App;
