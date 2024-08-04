function Stats({ todos }) {
  const pendingTodos = todos.reduce((acc, todo) => {
    if (!todo.completed) return acc + 1;
    return acc;
  }, 0);

  const completedTodos = todos.length - pendingTodos;

  return (
    <footer className="stats">
      {todos.length > 0 && pendingTodos > 0 && (
        <p>
          You have Completed {completedTodos} TODOS and your pending todos:
          {pendingTodos}
        </p>
      )}
      {todos.length > 0 && pendingTodos === 0 && (
        <p>Congrats!!! You have Completed all your TODOS</p>
      )}
      {todos.length === 0 && <p>No TODOS Added Yet? Add One </p>}
    </footer>
  );
}

export default Stats;
