import { useEffect, useRef, useState } from "react";

function TodoEditForm({ todo, setIsEditMode, onUpdate }) {
  const titleInput = useRef();
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  useEffect(() => {
    titleInput.current.focus();
  }, []);
  function handleChange(e) {
    if (e.target.id === "edit-title") {
      if (e.target.value.length <= 50) {
        setEditTitle(e.target.value);
      }
    } else {
      if (e.target.value.length <= 150) {
        setEditDescription(e.target.value);
      }
    }
  }

  function handleEdit() {
    const EditedTodo = {
      ...todo,
      title: editTitle,
      description: editDescription,
      completed: false,
    };
    onUpdate(EditedTodo);
    setIsEditMode(false);
  }
  return (
    <form className="todo-details" onSubmit={handleEdit}>
      <div className="edit-input-group">
        <label htmlFor="edit-title">TODO Title</label>
        <input
          ref={titleInput}
          className="edit-input"
          type="text"
          id="edit-title"
          value={editTitle}
          onChange={handleChange}
        />
      </div>
      <div className="edit-input-group">
        <label htmlFor="edit-description">TODO Description</label>
        <textarea
          className="edit-input"
          type="text"
          id="edit-description"
          value={editDescription}
          cols="40"
          onChange={handleChange}
        />
      </div>
      <div className="cta">
        <button onClick={handleEdit}>
          <span className="material-symbols-outlined">save</span>
        </button>
        <button onClick={() => setIsEditMode(false)}>
          <span className="material-symbols-outlined">cancel</span>
        </button>
      </div>
    </form>
  );
}

export default TodoEditForm;
