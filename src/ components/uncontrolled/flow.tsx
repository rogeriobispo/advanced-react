import React from "react";

const UnControledFlow = ({ children, onDone }) => {
  const [data, setData] = React.useState({});
  const [currentFlow, setCurrentFlow] = React.useState(0);

  const goToNextFlow = (dataFromStep) => {
    setData((prevData) => ({ ...prevData, ...dataFromStep }));
    console.log(data)
    if (currentFlow + 1 >= React.Children.count(children)) {
      if (onDone) {
        onDone(data);
      }
      return;
    }
    setCurrentFlow((prevFlow) => prevFlow + 1);
  };

  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (index === currentFlow) {
          return React.cloneElement(child, { goToNextFlow });
        }
        return null;
      })}
    </>
  );

}

export default UnControledFlow;
