import './layout.css'

const Layout = ({ header, footer, menu, children }) => {
  return (
    <div className="layout">
      {header &&
        <header className="layout__header">
          {header}
        </header>
      }
      {
        menu &&
        <nav className="layout__menu">{menu}</nav>
      }
      <main className="layout__body">
        {children}
      </main>
      {footer &&
        <footer className="layout__footer">
          {footer}
        </footer>
      }
    </div>
  )
}

export default Layout
