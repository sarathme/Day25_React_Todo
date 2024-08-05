# React Todo

## List of Components Used

1. Header (Presentational Component).
2. TodoList (Presentational Component).
3. Todo (For Individual TODO).
4. TodoDetails (For Visualizing TODO details).
5. TodoEditForm (Form for editing Individual TODOs).
6. Form (Input form for adding new TODOs).
7. Filter (For filtering TODOs).
8. Stats (Presentational Component).

## Usage of useState hook

### App Component

For storing and changing TODO lists.

```js
const [todos, setTodos] = useState([]);
const [todosFiltered, setTodosFiltered] = useState(todos);
```

### Form Component

To connect input and textarea element with the state variables **_(title and
description)_** **(Controlled Elements)**

```js
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
```

### Filter Component

To connect the select element with the state **_(selectedFiler)_** **(Controlled
Elements)**

```js
const [selectedFilter, setSelectedFilter] = useState("all");
```

### Todo Component

To toggle edit mode for individual TODOs

```js
const [isEditMode, setIsEditMode] = useState(false);
```

### TodoEditForm Component

To connect the form elements with the state variables **_(editTitle and
editDescription)_** **(Controlled Elements)**

```js
const [editTitle, setEditTitle] = useState(todo.title);
const [editDescription, setEditDescription] = useState(todo.description);
```

## Usage of useEffect hook

### App Component

To get or set a local storage key value for holding the TODOs across reload.
useEffect with empty dependency array will run for the initial render or on
mount phase.

```js
// App Component

useEffect(() => {
  const todosStorage = localStorage.getItem("todos");

  if (!todosStorage) localStorage.setItem("todos", JSON.stringify(todos));

  setTodos(JSON.parse(localStorage.getItem("todos")));
}, []);
```

Below useEffect hook is used to synchronize the filterred TODOs with the TODOs
array since the todosFiltered state variable is the data which is rendered on
the DOM.

```js
// App Component

useEffect(() => {
  setTodosFiltered(todos);
}, [todos]);
```

### Filter Component

Below useEffect hook is used to reset the select element value for any change in
the todos state since the dependency array is given the todos state variable.

```js
useEffect(() => {
  setSelectedFilter("all");
}, [todos]);
```

### TodoEditForm Component

Below use Effect is used just for accessibility concern which focus the input
element when edit mode is turned on.

```js
useEffect(() => {
  titleInput.current.focus();
}, []);
```

## Out of scope Learning (useRef hook)

This hook is like the useState hook but it doesnot cause the component to
re-render when its value is changed.

This hook is used to hold some values which need to persist throughout
re-renders.

### Usage

```js
const count = useRef(0);
```

The syntax is similar to useState hook which the useRef function accepts an
initial value but it returns a javaScript object.

We can change the initial values in the returned object in the current property
(In the above case: **_count.current_** property).
