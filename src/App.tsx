import UserDetail from "./components/containerPattern/userDatail"
import GenericContainer from "./components/containerPattern/genericContainer"
import TodoDetail from "./components/containerPattern/todoDetail"
import DataSetContainer from "./components/containerPattern/dataSetContainer"
import DataSetContainerWithRender from "./components/containerPattern/dataSetContainerWithRender"

function LeftSide() {
  return (
    <div>
      <h2>Left Side Content</h2>
    </div>
  )
}

function RightSide() {
  return (
    <div>
      <h2>right Side Content</h2>
    </div>
  )
}
const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  return response.json()
}

function App() {

  return (
    <>
      <h3>React avanaçado</h3>
      <DataSetContainerWithRender
        getData={async () => fetchTodos()}
        render={(resource) => <TodoDetail todo={resource} />}
      >
        <TodoDetail />
      </DataSetContainerWithRender>
    </>
  )
}

export default App
