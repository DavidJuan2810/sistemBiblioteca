import React, { useState } from "react";
import { Form, Input, Button } from "@heroui/react";
import { useCrearAutor } from "../../hook/useCrearAutor";

interface Props {
  onSuccess: () => void; // Para cerrar modal tras éxito
}

export default function CrearAutor({ onSuccess }: Props) {
  const [nombre, setNombre] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");

  const crearAutorMutation = useCrearAutor();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    crearAutorMutation.mutate(
      { nombre, nacionalidad },
      {
        onSuccess: () => {
          alert("Autor creado!");
          onSuccess(); // Cierra modal
        },
        onError: (err) => {
          alert(`Error: ${err.message}`);
        },
      }
    );
  };

  return (
    <Form
      className="w-full flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <Input
        isRequired
        label="Nombre"
        labelPlacement="outside"
        name="nombre"
        placeholder="Ingrese el nombre"
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <Input
        isRequired
        label="Nacionalidad"
        labelPlacement="outside"
        name="nacionalidad"
        placeholder="Ingrese la nacionalidad"
        type="text"
        value={nacionalidad}
        onChange={(e) => setNacionalidad(e.target.value)}
      />
      <Button
        color="primary"
        type="submit"
        isLoading={crearAutorMutation.isPending}
      >
        Crear Autor
      </Button>
    </Form>
  );
}