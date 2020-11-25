import React from "react";
import DeleteTask from "./buttons/DeleteTask";
const TaskItem = ({ task }) => {
  return (
    <div>
      <input type="checkbox" id="myCheck" onclick="myFunction()" />

      <p>
        {task.name} {task.priority}
        <DeleteTask taskId={task.id}>delete</DeleteTask>
      </p>
    </div>
  );
};

export default TaskItem;
