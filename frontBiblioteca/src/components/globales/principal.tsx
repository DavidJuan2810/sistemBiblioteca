import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  Link,
  Button,
} from "@heroui/react";
import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";

export const AcmeLogo = () => (
  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default function Principal() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="w-64 bg-gray-100 p-6 flex flex-col gap-6">
        <h2 className="text-xl font-bold mb-4">Menú</h2>
        <Link as={RouterLink} to="/api/biblioteca" className="text-blue-600 hover:underline">
          Bibliotecas
        </Link>
        <Link as={RouterLink} to="/api/autor" className="text-blue-600 hover:underline">
          Autores
        </Link>
        <Link as={RouterLink} to="/api/libro" className="text-blue-600 hover:underline">
          Libros
        </Link>
      </nav>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar position="static" className="bg-white shadow-md">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit ml-2">Sistema para biblioteca</p>
          </NavbarBrand>
          <NavbarContent justify="end">
            <Button color="danger" variant="flat" onPress={handleLogout}>
              Cerrar Sesión
            </Button>
          </NavbarContent>
        </Navbar>

        {/* Aquí se renderizan las rutas hijas */}
        <main className="p-6 flex-1 overflow-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}