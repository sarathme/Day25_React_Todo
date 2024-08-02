function Todo({ todo }) {
  return (
    <div className="todo">
      <h2 className="todo-title">Make Tea</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, suscipit.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
        repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Temporibus rerum quisquam explicabo non illo itaque corrupti maiores
        tenetur ad? Beatae.
      </p>

      <div className="cta">
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>
      <div className="todo-status completed">Completed</div>
    </div>
  );
}

export default Todo;
