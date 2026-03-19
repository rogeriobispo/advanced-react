const Capturing = () => {
  return (
    <div>
      <h1>Capturing Button</h1>
      <div onClickCapture={() => console.log("cima")}>
        <button onClick={() => console.log("baixo")}>
          Click
        </button>
      </div>
    </div>
  );
}

export default Capturing;
