import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { User } from "../models/response/User";
import { deleteUser, getUsers } from "../services/UserService";
import { Trash2 } from "lucide-react";

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Error al obtener los usuarios",
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handleDelete = async (userResourceId: string) => {
    const confirmed = window.confirm(
      "¿Está seguro de que desea eliminar este usuario?",
    );

    if (!confirmed) return;

    setDeletingId(userResourceId);
    setError(null);

    try {
      await deleteUser(userResourceId);

      // Actualizar la tabla sin recargar la página
      setUsers((currentUsers) =>
        currentUsers.filter(
          (user) => user.userResourceId !== userResourceId,
        ),
      );
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "No se pudo eliminar el usuario",
      );
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-cream-300 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-cream-300 px-6 py-5">
        <h2 className="text-lg font-semibold text-forest-800">Lista de usuarios</h2>

        {!isLoading && (
          <span className="rounded-full bg-cream-200 px-3 py-1 text-xs font-medium text-ink-700">
            {users.length} {users.length === 1 ? "usuario" : "usuarios"}
          </span>
        )}
      </div>

      {error && (
        <div
          role="alert"
          className="m-5 rounded-xl border border-clay-200 bg-clay-50 p-4 text-sm text-clay-700"
        >
          {error}
        </div>
      )}

      {isLoading ? (
        <p
          role="status"
          className="flex items-center justify-center gap-3 px-6 py-16 text-center text-sm text-ink-500"
        >
          <span
            aria-hidden="true"
            className="size-5 animate-spin rounded-full border-2 border-forest-200 border-t-forest-600"
          />
          Cargando usuarios...
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-forest-700 text-xs uppercase tracking-wider text-cream-100">
              <tr>
                <th scope="col" className="px-6 py-3.5 font-semibold">User Resource ID</th>
                <th scope="col" className="px-6 py-3.5 font-semibold">Nombre</th>
                <th scope="col" className="px-6 py-3.5 font-semibold">Edad</th>
                <th scope="col" className="px-6 py-3.5 text-center font-semibold">Acciones</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-cream-200">
              {users.length === 0 && !error && (
                <tr>
                  <td colSpan={4} className="px-6 py-14 text-center text-sm text-ink-500">
                    Aún no hay usuarios registrados.
                  </td>
                </tr>
              )}

              {users.map((user) => (
                <tr
                  key={user.userResourceId}
                  className="transition-colors odd:bg-white even:bg-cream-50 hover:bg-forest-50"
                >
                  <td className="px-6 py-4 font-mono text-xs text-ink-500">{user.userResourceId}</td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/users/${user.userResourceId}`}
                      className="rounded font-medium text-forest-700 underline-offset-4 hover:text-forest-900 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-600"
                    >
                      {user.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 text-ink-700">{user.age} años</td>

                  <td className="px-6 py-4 text-center">
                    <button
                      type="button"
                      onClick={() => handleDelete(user.userResourceId)}
                      disabled={deletingId !== null}
                      title={`Eliminar ${user.name}`}
                      aria-label={`Eliminar ${user.name}`}
                      className="rounded-lg p-2.5 text-clay-600 transition-colors focus-visible:outline-2 focus-visible:outline-clay-600
                                 hover:bg-clay-50
                                 disabled:cursor-not-allowed
                                 disabled:opacity-50"
                    >
                      <Trash2 size={18} aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
