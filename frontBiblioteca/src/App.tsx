import { Routes, Route, Navigate } from "react-router-dom";
import Principal from "./components/globales/principal";
import AutoresPage from "./pages/autorPagina";
import BibliotecasPage from "./pages/bibliotecaPagina";
import LibrosPage from "./pages/libroPagina";
import Login from "./components/globales/login";
import Register from "./components/globales/register";

// Componente para proteger rutas
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Ruta raíz redirige a login si no hay token */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Rutas protegidas con layout principal */}
      <Route
        path="/api"
        element={
          <ProtectedRoute>
            <Principal />
          </ProtectedRoute>
        }
      >
        {/* Páginas dentro de /api */}
        <Route path="autor" element={<AutoresPage />} />
        <Route path="biblioteca" element={<BibliotecasPage />} />
        <Route path="libro" element={<LibrosPage />} />
      </Route>

      {/* Página no encontrada */}
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  );
}
