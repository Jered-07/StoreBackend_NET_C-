import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section aria-labelledby="not-found-title">
      <span aria-hidden="true">404</span>

      <p>Error 404 · Fuera de ruta</p>

      <h1 id="not-found-title">Esta página no existe</h1>

      <p>
        La dirección puede haber cambiado o estar escrita incorrectamente.
        Regresa al catálogo y encuentra tu próximo producto.
      </p>

      <div>
        <Link to="/products">Volver a productos</Link>

        <Link to="/products/new">
          Crear producto <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}

export default NotFound
