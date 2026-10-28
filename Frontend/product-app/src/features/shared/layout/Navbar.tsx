import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header>
      <div>
        <NavLink to="/products" aria-label="Store — Productos">
          <strong>Store</strong>
        </NavLink>

        <nav aria-label="Navegación principal">
          <NavLink to="/products" end>
            Productos
          </NavLink>

          <NavLink to="/products/new">
            Nuevo producto
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
