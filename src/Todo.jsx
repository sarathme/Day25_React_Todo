import { useState } from "react";
import TodoDetails from "./TodoDetails";
import TodoEditForm from "./TodoEditForm";

function Todo({ todo, onUpdate, onDelete }) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <li className={`todo ${todo.completed ? "mark-completed" : ""}`}>
      {!isEditMode ? (
        <TodoDetails
          todo={todo}
          setIsEditMode={setIsEditMode}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ) : (
        <TodoEditForm
          todo={todo}
          isEditMode={isEditMode}
          setIsEditMode={setIsEditMode}
          onUpdate={onUpdate}
        />
        // <form
        //   className="todo-details"
        //   onSubmit={(e) => {
        //     e.preventDefault();
        //     return handleEdit();
        //   }}>
        //   <div className="edit-input-group">
        //     <label htmlFor="edit-title">TODO Title</label>
        //     <input
        //       ref={titleInput}
        //       className="edit-input"
        //       type="text"
        //       id="edit-title"
        //       value={EditTitle}
        //       onChange={handleChange}
        //     />
        //   </div>
        //   <div className="edit-input-group">
        //     <label htmlFor="edit-description">TODO Description</label>
        //     <textarea
        //       className="edit-input"
        //       type="text"
        //       id="edit-description"
        //       value={EditDescription}
        //       cols="40"
        //       onChange={handleChange}
        //     />
        //   </div>
        // </form>
      )}

      {/* <div className="cta">
        <button onClick={() => setIsEditMode((edit) => !edit)}>
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button
          onClick={() => {
            onDelete(todo);
          }}>
          <span className="material-symbols-outlined">
            {isEditMode ? "cancel" : "delete"}
          </span>
        </button>

        <button
          onClick={() => {
            onUpdate(todo);
          }}>
          <span className="material-symbols-outlined">
            {todo.completed ? "unpublished" : "check_circle "}
          </span>
        </button>
      </div> */}
      <div
        className={`todo-status ${todo.completed ? "completed" : "pending"}`}>
        {todo.completed ? "Completed" : "Pending"}
      </div>
    </li>
  );
}

export default Todo;
