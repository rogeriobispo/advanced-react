import { useEffect, useLayoutEffect, useRef, useState } from "react";

const Message = () => {
  const [show, setShow] = useState(false);
  const [top, setTop] = useState(0);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    if (show) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setTop(buttonRect.bottom + 10);
    }
  }, [show]);

  return (
    <div>
      <button ref={buttonRef} onClick={() => setShow(!show)}>Toggle Message</button>
      {show && <p style={{ position: 'absolute', top: top }}>Hello, World!</p>}
    </div>
  )

}

export default Message;
