import ControlledComponent from "./ components/controlled"
import ControlledForm from "./ components/controlled/controlledForm"
import ParentComponent from "./ components/controlled/parentComponent"
import UncontrolledForm from "./ components/controlled/unctrolledForm"
import UnControlledComponent from "./ components/uncontrolled"

function App() {

  return (
    <>
      <h1>React avanaçado</h1>

      Component
      <UnControlledComponent />
      Pattern Container
      <ParentComponent />
      UnControlled form
      <UncontrolledForm />
      Controlled form
      <ControlledForm />

    </>
  )
}

export default App
