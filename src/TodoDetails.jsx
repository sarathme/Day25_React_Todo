import { useRef } from "react";

function TodoDetails({ todo, setIsEditMode, onUpdate }) {
  const completedBtn = useRef();
  return (
    <>
      <div className="todo-details">
        <h2 className="todo-title">{todo.title}</h2>
        <p>{todo.description}</p>
      </div>
      <div className="cta">
        <button onClick={() => setIsEditMode((edit) => !edit)}>
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button
          onClick={() => {
            onUpdate(todo, true);
          }}>
          <span className="material-symbols-outlined">delete</span>
        </button>

        <button
          ref={completedBtn}
          onClick={() => {
            completedBtn.current.blur();
            onUpdate({ ...todo, completed: !todo.completed });
          }}>
          <span className="material-symbols-outlined">
            {todo.completed ? "unpublished" : "check_circle "}
          </span>
        </button>
      </div>
    </>
  );
}

export default TodoDetails;
