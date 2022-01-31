import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!userInput) return;

    addTodo(userInput);
    setUserInput("");
  };
  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={userInput}
            placeholder="Add New Task by enter"
            onChange={(e) => setUserInput(e.target.value)}
          />
        </label>
      </form>
    </div>
  );
};

export default TodoForm;
