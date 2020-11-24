import React from "react";
import TaskItem from "./TaskItem";
import tasks from "../tasks";
import tasksStore from "../stores/taskStore";
import { observer } from "mobx-react";

const TaskList = () => {
  const taskList2 = tasksStore.tasks.map((task) => (
    <TaskItem task={task} key={task.id} />
  ));
  return <div>{taskList2}</div>;
};

export default observer(TaskList);
