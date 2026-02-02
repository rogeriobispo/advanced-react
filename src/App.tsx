import React from "react";
import ControledFlow from "./ components/controlled/flow";

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

function App() {
  const [data, setData] = React.useState({});
  const [currentFlow, setCurrentFlow] = React.useState(0);

  const goToNextFlow = (dataFromStep) => {
    setData((prevData) => ({ ...prevData, ...dataFromStep }));
    console.log("Dados acumulados: ", { ...data, ...dataFromStep });
    setCurrentFlow((prevFlow) => prevFlow + 1);
  };


  return (
    <>
      <h1>React avançado</h1>
      <ControledFlow currentFlow={currentFlow} goToNextFlow={goToNextFlow}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </ControledFlow>

    </>
  )
}

export default App
