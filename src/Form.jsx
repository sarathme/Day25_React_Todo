import { useEffect, useState } from "react";

function Form({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {}, [title, description]);

  function handleSubmit(e) {
    e.preventDefault();
    const todo = { title, description, completed: false, id: Date.now() };
    console.log(todo);
    onAdd(todo);
  }

  function handleChange(e) {
    if (e.target.id === "title") {
      setTitle(e.target.value);
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
          placeholder="Enter a TODO title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
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
          placeholder="What's the TODO. Explain Here."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        />
      </div>
      <button>Add TODO</button>
    </form>
  );
}

export default Form;
