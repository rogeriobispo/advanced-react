import React from 'react'

type Props = {
  onNavigate: (index: number) => void
}

export default function RecentNews({ onNavigate }: Props) {
  const news = [
    { id: 1, title: 'Lançamento do novo projeto', date: '2026-07-01' },
    { id: 2, title: 'Conquista: 1k seguidores', date: '2026-06-20' },
    { id: 3, title: 'Evento: Meetup React', date: '2026-05-15' },
  ]

  return (
    <div>
      <h2>Notícias Recentes</h2>
      <ul>
        {news.map(n => (
          <li key={n.id}><strong>{n.title}</strong> — <small>{n.date}</small></li>
        ))}
      </ul>

      <div style={{ marginTop: 12 }}>
        <button onClick={() => onNavigate(0)}>Ver informações pessoais</button>
        <button onClick={() => onNavigate(1)} style={{ marginLeft: 8 }}>Ver seguidores</button>
      </div>
    </div>
  )
}
