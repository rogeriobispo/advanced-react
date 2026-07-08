import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import FollowersSummary from './FollowersSummary'
import RecentNews from './RecentNews'

export default function Viewer() {
  const [active, setActive] = useState(0) // 0=personal,1=followers,2=news

  const renderActive = () => {
    switch (active) {
      case 0:
        return <PersonalInfo onNavigate={setActive} />
      case 1:
        return <FollowersSummary onNavigate={setActive} />
      case 2:
        return <RecentNews onNavigate={setActive} />
      default:
        return null
    }
  }

  return (
    <div style={{ border: '1px solid #ddd', padding: 16, borderRadius: 6, maxWidth: 640 }}>
      <nav style={{ marginBottom: 12 }}>
        <button onClick={() => setActive(0)} aria-pressed={active===0}>Pessoal</button>
        <button onClick={() => setActive(1)} style={{ marginLeft: 8 }} aria-pressed={active===1}>Seguidores</button>
        <button onClick={() => setActive(2)} style={{ marginLeft: 8 }} aria-pressed={active===2}>Notícias</button>
      </nav>

      <section>
        {renderActive()}
      </section>

      <footer style={{ marginTop: 14 }}>
        <small>Componente ativo: {['Pessoal','Seguidores','Notícias'][active]}</small>
      </footer>
    </div>
  )
}
