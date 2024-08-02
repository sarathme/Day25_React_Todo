import Form from "./Form.jsx";
import Header from "./Header.jsx";
import Stats from "./Stats.jsx";
import Todo from "./Todo.jsx";
import TodoList from "./TodoList.jsx";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Form />
        <TodoList>
          <Todo />
          <Todo />
        </TodoList>
      </div>
      <Stats />
    </>
  );
}

export default App;
