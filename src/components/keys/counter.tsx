import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <br />
      <label>Set Count: </label>
      <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
    </div>
  );
};

export default Counter;
