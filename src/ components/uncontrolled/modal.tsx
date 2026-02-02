import { useState } from "react";
import { ContainerModal, ModalBox } from "./modal.css";

const UncontrolledModal = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow}>Open Modal</button>

      {show && (
        <div className={ContainerModal}>
          <div className={ModalBox}>
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
}


export default UncontrolledModal;
