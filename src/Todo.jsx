import { useState } from "react";
import TodoDetails from "./TodoDetails";
import TodoEditForm from "./TodoEditForm";

function Todo({ todo, onUpdate }) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <li className={`todo ${todo.completed ? "mark-completed" : ""}`}>
      {!isEditMode ? (
        <TodoDetails
          todo={todo}
          setIsEditMode={setIsEditMode}
          onUpdate={onUpdate}
        />
      ) : (
        <TodoEditForm
          todo={todo}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          onUpdate={onUpdate}
        />
      )}
      <div
        className={`todo-status ${todo.completed ? "completed" : "pending"}`}>
        {todo.completed ? "Completed" : "Pending"}
      </div>
    </li>
  );
}

export default Todo;
