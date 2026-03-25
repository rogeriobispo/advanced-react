import { type ChangeEvent, useId } from 'react'

export interface ContatoFormData {
  nome: string
  email: string
}

interface ContatoFormProps {
  formData: ContatoFormData
  onChange: (field: keyof ContatoFormData, value: string) => void
}

function ContatoForm({ formData, onChange }: ContatoFormProps) {
  const formId = useId()
  const nomeInputId = `${formId}-nome`
  const emailInputId = `${formId}-email`

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    onChange(name as keyof ContatoFormData, value)
  }

  return (
    <fieldset>
      <legend>{`Contato`}</legend>

      <div>
        <label htmlFor={nomeInputId}>Nome</label>
        <input
          id={nomeInputId}
          name="nome"
          type="text"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite seu nome"
          required
        />
      </div>

      <div>
        <label htmlFor={emailInputId}>Email</label>
        <input
          id={emailInputId}
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu email"
          required
        />
      </div>
    </fieldset>
  )
}

export default ContatoForm
