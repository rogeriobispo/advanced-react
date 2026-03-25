import { useState } from 'react'
import ContatoForm, { type ContatoFormData } from "./components/contatos/ContatoForm"

const contatosIniciais: ContatoFormData[] = [
  { nome: '', email: '' },
  { nome: '', email: '' },
  { nome: '', email: '' },
]

function App() {
  const [contatos, setContatos] = useState<ContatoFormData[]>(contatosIniciais)

  function handleContatoChange(
    contatoIndex: number,
    field: keyof ContatoFormData,
    value: string,
  ) {
    setContatos((prevContatos) =>
      prevContatos.map((contato, index) =>
        index === contatoIndex ? { ...contato, [field]: value } : contato,
      ),
    )
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('Dados enviados:', contatos)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>React avançado</h1>

      {contatos.map((contato, index) => (
        <ContatoForm
          key={index}
          formData={contato}
          onChange={(field, value) => handleContatoChange(index, field, value)}
        />
      ))}

      <button type="submit">Enviar todos</button>
    </form>
  )
}

export default App
