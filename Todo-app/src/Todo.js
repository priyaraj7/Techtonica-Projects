const Todo = ({ todo, toggleTodo, index, deleteTodo, sortByTime }) => {
  return (
    <div className="todo-container">
      <div className="text">
        <label htmlFor={`todo-${index}`}>
          <input
            id={`todo-${index}`}
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => toggleTodo(index)}
          />
          {todo.text}
        </label>
        <button onClick={() => deleteTodo(index)}>delete</button>
      </div>
    </div>
  );
};

export default Todo;
