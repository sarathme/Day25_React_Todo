import { useEffect, useState } from "react";
import Form from "./Form.jsx";
import Header from "./Header.jsx";
import Stats from "./Stats.jsx";
import TodoList from "./TodoList.jsx";
import Todo from "./Todo.jsx";
import Filter from "./Filter.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const [todosFiltered, setTodosFiltered] = useState(todos);

  useEffect(() => {
    const todosStorage = localStorage.getItem("todos");

    if (!todosStorage) localStorage.setItem("todos", JSON.stringify(todos));

    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  useEffect(() => {
    setTodosFiltered(todos);
  }, [todos]);

  // Handler function to Add new TODOs

  function handleAddTodo(todo) {
    setTodos((todos) => {
      const newTodos = [todo, ...todos];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }

  // Handler function to Update TODO or Delete TODO

  function handleOnUpdate(todoUpdated, del = false) {
    setTodos((todos) => {
      const updatedTodo = !del
        ? todos.map((todo) => {
            if (todo.id === todoUpdated.id) {
              return todoUpdated;
            }

            return todo;
          })
        : todos.filter((todo) => todo.id !== todoUpdated.id);
      localStorage.setItem("todos", JSON.stringify(updatedTodo));
      return updatedTodo;
    });
  }

  return (
    <>
      <div className="container">
        <Header />
        <Form onAdd={handleAddTodo} />
        <Filter todos={todos} setTodosFiltered={setTodosFiltered} />
        <TodoList>
          {todosFiltered.length === 0 && <h3>No Todos Available</h3>}
          {todosFiltered.map((todo) => (
            <Todo key={todo.id} todo={todo} onUpdate={handleOnUpdate} />
          ))}
        </TodoList>
      </div>
      <Stats todos={todos} />
    </>
  );
}

export default App;
