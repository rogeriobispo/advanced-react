import React from "react";

const ControledFlow = ({ children, currentFlow, goToNextFlow }) => {

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

export default ControledFlow;
