import { useEffect, useState } from "react";
import Form from "./Form.jsx";
import Header from "./Header.jsx";
import Stats from "./Stats.jsx";
import TodoList from "./TodoList.jsx";
import Filter from "./Filter.jsx";

const todosTemp = [
  {
    id: 1,
    title: "Do something nice for someone you care about",
    completed: false,
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
  },
  {
    id: 2,
    title: "Memorize a poem",
    completed: true,
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Diam congue nulla turpis enim et sodales placerat viverra. Accumsan vitae viverra suscipit est ornare.",
  },
  {
    id: 3,
    title: "Watch a classic movie",
    completed: true,
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Diam congue nulla turpis enim et sodales placerat viverra. Accumsan vitae viverra suscipit est ornare.",
  },
  {
    id: 4,
    title: "Watch a documentary",
    completed: false,
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Diam congue nulla turpis enim et sodales placerat viverra. Accumsan vitae viverra suscipit est ornare.",
  },
  {
    id: 5,
    title: "Watch a documentary",
    completed: false,
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Diam congue nulla turpis enim et sodales placerat viverra. Accumsan vitae viverra suscipit est ornare.",
  },
];

function App() {
  const [todos, setTodos] = useState(todosTemp);
  const [todosFiltered, setTodosFiltered] = useState(todos);

  useEffect(() => {
    const todosStorage = localStorage.getItem("todos");

    if (!todosStorage) localStorage.setItem("todos", JSON.stringify(todos));

    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  useEffect(() => {
    setTodosFiltered(todos);
  }, [todos]);

  function handleAddTodo(todo) {
    setTodos((todos) => {
      const newTodos = [...todos, todo];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }
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
        <TodoList todos={todosFiltered} onUpdate={handleOnUpdate} />
      </div>
      <Stats todos={todos} />
    </>
  );
}

export default App;
