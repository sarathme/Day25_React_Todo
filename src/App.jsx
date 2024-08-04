import { useEffect, useState } from "react";
import Form from "./Form.jsx";
import Header from "./Header.jsx";
import Stats from "./Stats.jsx";
import TodoList from "./TodoList.jsx";

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
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh ipsum neque potenti sodales non ornare condimentum scelerisque. Arcu neque aenean ipsum ante ante. Maximus euismod eget egestas praesent leo vestibulum montes. Erat aptent quis at class nisi conubia nisl risus. Libero sagittis netus viverra tortor ultrices curabitur.",
  },
  {
    id: 4,
    title: "Watch a documentary",
    completed: false,
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque nisl platea nam viverra leo varius inceptos. Proin convallis id leo etiam penatibus venenatis semper congue. Aliquet penatibus venenatis mauris pharetra proin. Etiam etiam ullamcorper semper ultricies morbi magnis, libero condimentum amet. Cubilia eros natoque quis conubia; vestibulum tortor. Quis ad phasellus taciti consectetur cras. Curae fames eget sodales ut dolor faucibus. Commodo dapibus imperdiet dui vestibulum; elit nec suspendisse imperdiet.",
  },
  {
    id: 5,
    title: "Watch a documentary",
    completed: false,
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Scelerisque nisl platea nam viverra leo varius inceptos. Proin convallis id leo etiam penatibus venenatis semper congue. Aliquet penatibus venenatis mauris pharetra proin. Etiam etiam ullamcorper semper ultricies morbi magnis, libero condimentum amet. Cubilia eros natoque quis conubia; vestibulum tortor. Quis ad phasellus taciti consectetur cras. Curae fames eget sodales ut dolor faucibus. Commodo dapibus imperdiet dui vestibulum; elit nec suspendisse imperdiet.",
  },
];

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todosStorage = localStorage.getItem("todos");

    if (!todosStorage) localStorage.setItem("todos", JSON.stringify(todos));

    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  function handleAddTodo(todo) {
    setTodos((todos) => {
      const newTodos = [...todos, todo];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  }
  function handleOnUpdate(todoUpdated) {
    setTodos((todos) => {
      const updatedTodo = todos.map((todo) => {
        if (todo.id === todoUpdated.id) {
          return todoUpdated;
        }

        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodo));
      return updatedTodo;
    });
  }

  function handleOnDelete(todoDelete) {
    setTodos((todos) => {
      const updatedTodo = todos.filter((todo) => todo.id !== todoDelete.id);
      localStorage.setItem("todos", JSON.stringify(updatedTodo));
      return updatedTodo;
    });
  }
  return (
    <>
      <div className="container">
        <Header />
        <Form onAdd={handleAddTodo} />
        <TodoList
          todos={todos}
          onUpdate={handleOnUpdate}
          onDelete={handleOnDelete}
        />
      </div>
      <Stats todos={todos} />
    </>
  );
}

export default App;
