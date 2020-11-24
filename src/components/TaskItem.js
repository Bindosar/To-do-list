import React from "react";
const TaskItem = ({ task }) => {
  return (
    <>
      <p>{task.name}</p>
      <p>{task.pryority}</p>
    </>
  );
};

export default TaskItem;
