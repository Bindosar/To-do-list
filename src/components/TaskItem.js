import React from "react";
import DeleteTask from "./buttons/DeleteTask";
import { observer } from "mobx-react";
const TaskItem = ({ task }) => {
  const handelChange = () => {
    if (task.done === true) task.done = false;
    else task.done = true;
  };
  return (
    <div>
      <input type="checkbox" checked={task.done} onChange={handelChange} />

      <p>
        {task.name} {task.priority} {task.done}
        <DeleteTask taskId={task.id}>delete</DeleteTask>
      </p>
    </div>
  );
};

export default observer(TaskItem);
