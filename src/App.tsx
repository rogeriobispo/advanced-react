import { useState } from "react";
import ControlledModal from "./ components/controlled/modal"
import UncontrolledModal from "./ components/uncontrolled/modal"

function App() {
  const [showControlledModal, setShowControlledModal] = useState(false);
  const handleDisplayControlledModal = () => {
    setShowControlledModal(!showControlledModal);
  }

  return (
    <>
      <h1>React avanaçado</h1>
      <UncontrolledModal >
        <h1>UncontrolledModal</h1>
        <h2>Este é o conteúdo do modal</h2>
        <p>Você pode colocar qualquer coisa aqui!</p>
      </UncontrolledModal>

      <ControlledModal show={showControlledModal} handleDisplayModal={handleDisplayControlledModal} >
        <h1>ControlledModal</h1>
        <h2>Este é o conteúdo do modal</h2>
        <p>Você pode colocar qualquer coisa aqui!</p>

      </ControlledModal>

    </>
  )
}

export default App
