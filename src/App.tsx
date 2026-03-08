import { LargeWarningButton, MediumWarningButton, WarningButton } from "./components/composition"

function App() {

  return (
    <>
      <h1>React avançado</h1>
      <WarningButton text="Small!" />
      <MediumWarningButton text="Medium!" />
      <LargeWarningButton text="Large!" />
    </>
  )
}

export default App
