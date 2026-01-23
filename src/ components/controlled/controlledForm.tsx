import { createRef, useEffect, useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(30);

  useEffect(() => {
    console.log("Name:", name);
    console.log("Age:", age);
  }, [name, age]);


  return (
    <form onSubmit={subimitHandler}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        defaultValue={30}
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />

      <input type="submit" value="Submit" />
    </form>
  )
}

export default ControlledForm;
