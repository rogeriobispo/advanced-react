import { useState } from 'react';
import { modalBackdropStyle, modalBackground, modalContent } from './modal.css';
export const Modal = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(!show)}>Show Modal</button>
      {show && (
        <div onClick={() => setShow(false)} className={modalBackground}>
          <div className={modalContent}>
            <div>
              <button onClick={() => setShow(false)}>Close Modal</button>
            </div>
            <div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal;
