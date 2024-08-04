import Todo from "./Todo";

function TodoList({ todos, onUpdate, onDelete }) {
  return (
    <ul className="todo-list">
      {todos.length === 0 && <h3>No Todos Available</h3>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
