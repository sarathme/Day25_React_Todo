function Form() {
  return (
    <form className="form">
      <div className="input-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          className="input-field"
          placeholder="Enter a TODO title"
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
        />
      </div>
    </form>
  );
}

export default Form;
