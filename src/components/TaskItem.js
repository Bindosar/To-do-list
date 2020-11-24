import React from "react";
const TaskItem = ({ task }) => {
  return (
    <>
      <p>{task.name}</p>
      <p>{task.priority}</p>
    </>
  );
};

export default TaskItem;
