import React from "react";
import DeleteTask from "./buttons/DeleteTask";
const TaskItem = ({ task }) => {
  return (
    <>
      <p>
        {task.name} {task.priority}
        <DeleteTask taskId={task.id}>delete</DeleteTask>
      </p>
    </>
  );
};

export default TaskItem;
