import { createRef } from "react";

const UncontrolledForm = () => {
  const nameRef = createRef<HTMLInputElement>();
  const ageRef = createRef<HTMLInputElement>();

  const subimitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", nameRef.current.value);
    console.log("Age:", ageRef.current.value);
  }


  return (
    <form onSubmit={subimitHandler}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        ref={nameRef}
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        name="age"
        defaultValue={30}
        ref={ageRef}
      />

      <input type="submit" value="Submit" />
    </form>
  )
}

export default UncontrolledForm;
