import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

const App = () => {
  // Declare a new state variable, which we'll call "todo"
  const [todos, setTodos] = useState([
    {
      text: "First Task",
      isCompleted: false,
      createdAt: new Date(),
    },
    {
      text: "Second Task",
      isCompleted: false,
      createdAt: new Date(),
    },
    {
      text: "Walk dog",
      isCompleted: false,
      createdAt: new Date(),
    },
    { text: "Feed cat", isCompleted: false, createdAt: new Date() },
  ]);
  const [sortBy, setSortBy] = useState("asc");

  const sortByTime = () => {
    setSortBy(sortBy === "asc" ? "dsc" : "asc");
  };

  // addTodo
  const addTodo = (userInput) => {
    const newTodos = [
      ...todos,
      { text: userInput, isCompleted: false, createdAt: new Date() },
    ];
    setTodos(newTodos);
  };

  // completeTodo function
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    console.log("todo =>", todos);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h2 className="header">My todos:</h2>
      <div className="todo-list">
        {todos
          .sort((a, b) => {
            if (sortBy === "asc") {
              return a.createdAt - b.createdAt;
            } else {
              return b.createdAt - a.createdAt;
            }
          })
          .map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}

        <div className="add-todo">
          <TodoForm addTodo={addTodo} />
        </div>
        <div className="sort">
          <button onClick={sortByTime}>Sort toggle by time</button>
        </div>
      </div>
    </div>
  );
};

export default App;
