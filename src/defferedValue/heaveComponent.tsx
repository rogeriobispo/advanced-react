const HeaveComponent = ({ name }) => {
  const init = performance.now();
  while (performance.now() - init < 200) {
    // Simulando um processamento pesado
  }

  return (
    <div>
      <h1>Heave Component</h1>
      <p>{name}</p>
    </div>
  );
}
export default HeaveComponent;
