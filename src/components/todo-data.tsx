import useFetchData from "../hooks/fetch-data";

const requestTodo = async (url) => {
  const response = await fetch(url);
  if (!response.ok) return {}
  return await response.json()
}

const TodosData = () => {
  const { data: todos } = useFetchData(() => requestTodo("https://jsonplaceholder.typicode.com/todos"));

  if (!todos) return <h1>Loading</h1>

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            <p>{todo.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodosData;
