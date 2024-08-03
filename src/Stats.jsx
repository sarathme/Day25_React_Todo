function Stats({ todos }) {
  const completedTodos = todos.reduce((acc, todo) => {
    if (todo.isCompleted) return acc + 1;
    return acc;
  }, 0);

  return (
    <footer className="stats">
      <p>
        You have Completed {completedTodos} TODOS and your pending todos:{" "}
        {todos.length - completedTodos}
      </p>
    </footer>
  );
}

export default Stats;
