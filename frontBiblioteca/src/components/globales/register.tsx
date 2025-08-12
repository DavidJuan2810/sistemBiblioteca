import React, { useState } from "react";
import { Button, Input, Select, SelectItem } from "@heroui/react";
import axios from "axios";

export default function Register() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [rol, setRol] = useState("Usuario");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const apiUrl = import.meta.env.VITE_API_URL;

  // Ajuste: el onChange de Select pasa el evento, pero el valor está en e.target.value
  // Si no funciona, también prueba e.detail.value según docs de HeroUI
  const handleRolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRol(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await axios.post(`${apiUrl}/register`, {
        correo,
        contraseña,
        rol,
      });

      setSuccess("Usuario registrado correctamente!");
      setCorreo("");
      setContraseña("");
      setRol("Usuario");
    } catch (err: any) {
      setError(err.response?.data?.message || "Error al registrar usuario");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 p-6 border rounded">
      <h2 className="text-2xl font-bold mb-4">Registrar Usuario</h2>
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
      <Select label="Rol" value={rol} onChange={handleRolChange} required>
        <SelectItem key="Usuario">Usuario</SelectItem>
        <SelectItem key="Administrador">Administrador</SelectItem>
      </Select>
      <Button type="submit" color="primary">
        Registrar
      </Button>
      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}
    </form>
  );
}
