import { useState } from "react";
import { ContainerModal, ModalBox } from "./modal.css";

const ControlledModal = ({ children, show = false, handleDisplayModal }) => {

  return (
    <>
      <button onClick={handleDisplayModal}>Open Modal</button>

      {show && (
        <div className={ContainerModal}>
          <div className={ModalBox}>
            <span className="close" onClick={handleDisplayModal}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
}


export default ControlledModal;
