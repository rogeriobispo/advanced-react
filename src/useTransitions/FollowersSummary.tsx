import React from 'react'

type Props = {
  onNavigate: (index: number) => void
}

export default function FollowersSummary({ onNavigate }: Props) {
  const summary = {
    followers: 1280,
    following: 250,
    topLocations: ['Brasil', 'Portugal', 'EUA'],
  }

  const init = performance.now();
  while (performance.now() - init < 500) {
    // Simulando um processamento pesado
  }

  return (
    <div>
      <h2>Resumo de Perfil / Seguidores</h2>
      <p><strong>Seguidores:</strong> {summary.followers}</p>
      <p><strong>Seguindo:</strong> {summary.following}</p>
      <p><strong>Top locais:</strong> {summary.topLocations.join(', ')}</p>

      <div style={{ marginTop: 12 }}>
        <button onClick={() => onNavigate(0)}>Ver informações pessoais</button>
        <button onClick={() => onNavigate(2)} style={{ marginLeft: 8 }}>Ver notícias</button>
      </div>
    </div>
  )
}
