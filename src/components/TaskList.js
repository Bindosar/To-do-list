import React from "react";
import TaskItem from "./TaskItem";
import tasks from "../tasks";
const TaskList = () => {
  const taskList2 = tasks.map((task) => <TaskItem task={task} key={task.id} />);
  return <div>{taskList2}</div>;
};

export default TaskList;
