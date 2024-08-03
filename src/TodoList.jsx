import Todo from "./Todo";

function TodoList({ todos, onComplete, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 && <h3>No Todos Available</h3>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
