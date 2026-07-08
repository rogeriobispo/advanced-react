import React from 'react'

type Props = {
  onNavigate: (index: number) => void
}

export default function PersonalInfo({ onNavigate }: Props) {
  const person = {
    name: 'João Silva',
    age: 34,
    email: 'joao.silva@example.com',
    location: 'São Paulo, BR',
  }

  return (
    <div>
      <h2>Informações Pessoais</h2>
      <p><strong>Nome:</strong> {person.name}</p>
      <p><strong>Idade:</strong> {person.age}</p>
      <p><strong>Email:</strong> {person.email}</p>
      <p><strong>Local:</strong> {person.location}</p>

      <div style={{ marginTop: 12 }}>
        <button onClick={() => onNavigate(1)}>Ver seguidores</button>
        <button onClick={() => onNavigate(2)} style={{ marginLeft: 8 }}>Ver notícias</button>
      </div>
    </div>
  )
}
