import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div>

        <div>
          <strong>Store</strong>
          <p>Tu catalogo, en un solo lugar.</p>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <h3>Explorar</h3>

          <Link to="/products">Productos</Link>

          <Link to="/products/new">Nuevo producto</Link>
        </nav>
        
      </div>

      <p>
        © {new Date().getFullYear()} StoreHub · Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
