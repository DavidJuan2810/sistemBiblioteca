import React, { useState } from "react";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await axios.post(`${apiUrl}/login`, {
        correo,
        contraseña,
      });

      localStorage.setItem("token", data.token);
      alert("Login exitoso!");
      navigate("/app/autor"); // Redirige a /app/autor tras login
    } catch (err: any) {
      setError(err.response?.data?.message || "Error en el login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4 p-6 border rounded shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Iniciar Sesión</h2>
        <Input
          label="Correo"
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <Input
          label="Contraseña"
          type="password"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />
        <Button type="submit" color="primary" fullWidth>
          Entrar
        </Button>
        {error && <p className="text-red-600 text-center">{error}</p>}
      </form>
    </div>
  );
}