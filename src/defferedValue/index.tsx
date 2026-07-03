import { useDeferredValue, useState } from "react";
import { HeaveComponent } from "./heaveComponent";

const DefferedValue = () => {
  const [name, setName] = useState('');

  const deferredName = useDeferredValue(name);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <HeaveComponent name={deferredName} />
    </div>
  )
};

export default DefferedValue;
