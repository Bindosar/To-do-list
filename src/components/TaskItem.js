import React from "react";
import DeleteButton from "../../../bbq/src/components/buttons/DeleteButton";
import DeleteTask from "../buttons/DeleteTask";
const TaskItem = ({ task }) => {
  return (
    <>
      <p>{task.name}</p>
      <DeleteTask />
      <p>{task.priority}</p>
    </>
  );
};

export default TaskItem;
