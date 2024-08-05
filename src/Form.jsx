import { useEffect, useRef, useState } from "react";

function Form({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Handler function to pass the new TODO data to App Component to add the created TODO when submitted.

  function handleSubmit(e) {
    e.preventDefault();
    const todo = { title, description, completed: false, id: Date.now() };
    onAdd(todo);
    setTitle("");
    setDescription("");
  }

  // Common function to handle change event in the form input and textarea element and to limit characters for each input. (Implement Controlled Elements).

  function handleChange(e) {
    if (e.target.id === "title") {
      if (e.target.value.length <= 50) {
        setTitle(e.target.value);
      }
    } else {
      if (e.target.value.length <= 150) {
        setDescription(e.target.value);
      }
    }
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="input-field"
          placeholder="Enter a TODO title (50 characters)"
          value={title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="description">Description</label>
        <textarea
          rows="3"
          type="text"
          id="description"
          className="input-field"
          placeholder="What's the TODO. Explain Here. (150 characters)"
          value={description}
          onChange={handleChange}
          required
        />
      </div>
      <button>Add TODO</button>
    </form>
  );
}

export default Form;
