import UserDetail from "./components/containerPattern/userDatail"
import GenericContainer from "./components/containerPattern/genericContainer"
import TodoDetail from "./components/containerPattern/todoDetail"

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
function App() {

  return (
    <>
      <h3>React avanaçado</h3>
      <GenericContainer resourceUrl="https://jsonplaceholder.typicode.com/users/1" resourceName="user">
        <UserDetail />
      </GenericContainer>
      <GenericContainer resourceUrl="https://jsonplaceholder.typicode.com/todos/1" resourceName="todo">
        <TodoDetail />
      </GenericContainer>
    </>
  )
}

export default App
