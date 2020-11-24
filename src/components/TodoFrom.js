import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.PreventDefault();
    props.onSubmit({});
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todooo ! "
        value={input}
        name="text"
        className="todo-input"
        onChanger
      />
      <button className="todo-button">Add ToDo</button>
    </form>
  );
}

export default TodoForm;
