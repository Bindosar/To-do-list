import React, { useState } from "react";
import TaskItem from "./TaskItem";
import tasksStore from "../stores/taskStore";
import { observer } from "mobx-react";
import TodoForm from "./TodoForm";

const TaskList = ({ tasks, createTasks }) => {
  // const filterdTask =tasksStore. task.filter((done) =>
  // task.done = false );
  const taskList2 = tasksStore.tasks.map((task) => (
    <TaskItem task={task} key={task.id} />
  ));
  return (
    <div>
      <h1>What do you want to do ? </h1>
      <TodoForm />
      {taskList2}
    </div>
  );
};

export default observer(TaskList);
