function Todo({ todo, onComplete, onDelete }) {
  return (
    <li className={`todo ${todo.completed ? "mark-completed" : ""}`}>
      <h2 className="todo-title">{todo.title}</h2>

      {/* <input type="text" readOnly value={todo.title} /> */}
      <p>{todo.description}</p>

      <div className="cta">
        <button>
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button>
          <span
            className="material-symbols-outlined"
            onClick={() => onDelete(todo)}>
            delete
          </span>
        </button>
        <button>
          <span
            className="material-symbols-outlined"
            onClick={() => onComplete(todo)}>
            {todo.completed ? "unpublished" : "check_circle "}
          </span>
        </button>
      </div>
      <div
        className={`todo-status ${todo.completed ? "completed" : "pending"}`}>
        {todo.completed ? "Completed" : "Pending"}
      </div>
    </li>
  );
}

export default Todo;
