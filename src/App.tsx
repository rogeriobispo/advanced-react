import Paragraph from "./components/paragraph"
import Title from "./components/title"
import ErrorsBounders from "./errors/errorsBounders"

function App() {

  return (
    <>
      <h1>React avançado</h1>
      <ErrorsBounders fallback={<h1>não foi possive carregar o titulo</h1>}>
        <Title title="Título do artigo" />
      </ErrorsBounders>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
    </>
  )
}

export default App
