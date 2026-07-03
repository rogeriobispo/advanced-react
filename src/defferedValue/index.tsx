import { useEffect, useState } from "react";
import HeaveComponent from "./heaveComponent";

const DefferedValue = () => {
  const [name, setName] = useState('');

  console.log('Renderizou');

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <HeaveComponent name={name} />
    </div>
  )
};

export default DefferedValue;
