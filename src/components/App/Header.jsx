import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      <h1 className="header_title"><Link to="/" className="link" style={{ textDecoration: 'none' }}>Recetario</Link></h1>
      {/* <nav class="menu">
        <div class="menu-toggle">
          <span class="hamburger-icon">☰</span>
        </div>
        <ul>
          <li><a href="inicio.html">Inicio</a></li>
          <li><a href="recetas.html">Recetas</a></li>
          <li><a href="categorias.html">Categorías</a></li>
          <li><a href="favoritos.html">Favoritos</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header