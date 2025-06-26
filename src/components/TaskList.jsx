/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Task from "./Task";

const TaskList = ({ tasks,onChangeTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onChangeTask={onChangeTask}></Task>
      ))}
    </ul>
  );
};

export default TaskList;
