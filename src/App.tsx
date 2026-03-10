import mitt from "mitt"
import Observer from "./observer"

export const emitter = mitt()

function App() {

  return (
    <>
      <h1>React avançado</h1>
      <Observer />
    </>
  )
}

export default App
