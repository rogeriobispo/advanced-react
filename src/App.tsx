import { useState } from "react";
import ControlledModal from "./ components/controlled/modal"
import UncontrolledModal from "./ components/uncontrolled/modal"
import UnControledFlow from "./ components/uncontrolled/flow";

function App() {
  const [showControlledModal, setShowControlledModal] = useState(false);
  const handleDisplayControlledModal = () => {
    setShowControlledModal(!showControlledModal);
  }

  const StepOne = ({ goToNextFlow }) => (
    <>
      <button onClick={() => goToNextFlow({
        stepOne: "Data from Step One"
      })}>Next</button>
      <div>Step One</div>
    </>
  );
  const StepTwo = ({ goToNextFlow }) => (
    <>
      <button onClick={() => goToNextFlow({
        stepTwo: "Data from Step Two"
      })}>Next</button>
      <div>Step Two</div>
    </>
  );
  const StepThree = ({ goToNextFlow }) => (
    <>
      <button onClick={() => goToNextFlow(
        { StepThree: "Data from Step Three" }
      )}>Next</button>
      <div>Step Three</div>
    </>
  );

  return (
    <>
      <h1>React avanaçado</h1>
      <UnControledFlow ondOne={
        (data) => {
          console.log("Flow finalizado com dados: ", data)
        }
      }>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UnControledFlow>

    </>
  )
}

export default App
