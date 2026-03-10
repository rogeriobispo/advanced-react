import { emitter } from "../App";

const Buttons = () => {
  const increment = () => {
    emitter.emit("increment");
  }
  const decrement = () => {
    emitter.emit("decrement");
  }

  return (
    <div className="buttons">
      <button onClick={decrement} >+</button>
      <button onClick={increment}>-</button>
    </div>
  );
};

export default Buttons;
