const Bubbling = () => {
  return (
    <div>
      <h1>Bubbling Button</h1>
      <div onClick={() => console.log("cima")}>
        <button onClick={() => console.log("baixo")}>
          Click
        </button>
      </div>
    </div>
  );
}

export default Bubbling;
