import { useState } from "react";

function Filter({ todos, setTodosFiltered }) {
  const [selctedFilter, setSelectedFilter] = useState("all");
  console.log(todos);
  function onFilterHandler(e) {
    console.log(e.target.value);
    setSelectedFilter(e.target.value);
    if (e.target.value === "all") setTodosFiltered(todos);
    if (e.target.value === "completed") {
      setTodosFiltered(() => todos.filter((todo) => todo.completed));
    }
    if (e.target.value === "pending") {
      setTodosFiltered(() => todos.filter((todo) => !todo.completed));
    }
  }
  return (
    <div className="filter">
      <h2>TODO List</h2>
      <select
        name="filter"
        id="filter"
        value={selctedFilter}
        onChange={onFilterHandler}>
        <option value="all">All TODOs</option>
        <option value="completed">Completed TODOs</option>
        <option value="pending">Pending TODOs</option>
      </select>
    </div>
  );
}

export default Filter;
