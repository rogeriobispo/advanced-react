const StopPropagation = () => {
  return (
    <div>
      <h1>StopPropagation Button</h1>
      <div onClick={() => console.log("cima")}>
        <button onClick={(e) => {
          e.stopPropagation()
          console.log("baixo")
        }
        }>
          Click
        </button>
      </div>
    </div>
  );
}

export default StopPropagation;
