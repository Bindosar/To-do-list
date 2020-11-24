import React, { useState } from "react";
import tasksStore from "../stores/taskStore";

function TodoForm(props) {
  const [task, setTask] = useState({
    name: "",
    priority: "",
  });
  const handleChanage = (event) => {
    setTask({ ...task, name: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    tasksStore.createTask(task);
    setTask({
      name: "",
      priority: "",
    });
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todooo ! "
        value={task.name}
        name="text"
        onChange={handleChanage}
      />
      {/* <input
        type="text"
        placeholder="Add the priority of the Todo  "
        value={task.priority}
        name="text"
        onChange={handleChanage}
      /> */}
      <button className="todo-button">Add ToDo </button>
    </form>
  );
}

export default TodoForm;
