import UsersTable from "../components/UsersTable"
import { UsersRound } from "lucide-react"

const Users = () => {
  return (
    <section aria-labelledby="users-title" className="space-y-8">
      <div className="flex items-center justify-between gap-6 rounded-3xl bg-forest-100 px-6 py-8 sm:px-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-forest-600">
            Administración de usuarios
          </p>

          <h1 id="users-title" className="mt-1 text-3xl font-bold tracking-tight text-forest-800 sm:text-4xl">
            Usuarios
          </h1>

          <p className="mt-2 max-w-lg text-sm leading-6 text-ink-700">
            Consulta, agrega y administra los usuarios de tu tienda.
          </p>
        </div>

        <span
          aria-hidden="true"
          className="hidden size-20 shrink-0 items-center justify-center rounded-2xl bg-cream-50 text-forest-600 sm:flex"
        >
          <UsersRound size={36} />
        </span>
      </div>

      <UsersTable/>
    </section>
  )
}

export default Users
