import './layout.css'
const Header = ({ children }) => <header className="layout__header">{children}</header>
const Footer = ({ children }) => <footer className="layout__footer">{children}</footer>
const Menu = ({ children }) => <nav className="layout__menu">{children}</nav>
const Body = ({ children }) => <main className="layout__body">{children}</main>

const Layout = ({ children }) => {
  return (
    <div className="layout">{children} </div>
  )
}

export default Layout

Layout.Header = Header
Layout.Footer = Footer
Layout.Menu = Menu
Layout.Body = Body
