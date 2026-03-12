import { useState } from "react";
import { createPortal } from "react-dom";

const Portals = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Portals</h1>
      <button onClick={() => setShow((value) => !value)}>
        {show ? 'ocultar' : 'exibir'}  mensagem
      </button>
      <AlertPortal show={show} onClose={() => setShow(false)}>
        <h1>Olá, eu sou um portal!</h1>
      </AlertPortal>
    </div>
  );
}

export default Portals;

const Alert = ({ children, onClose, show }) => {
  if (!show) return null;

  return (
    <div onClick={onClose}>
      {children}
    </div>
  )
}



const AlertPortal = ({ children, onClose, show }) => {
  if (!show) return null;

  return createPortal(
    <div onClick={onClose}>
      {children}
    </div>,
    document.getElementById('portal-root')
  )
}

