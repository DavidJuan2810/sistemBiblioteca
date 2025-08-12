import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "@heroui/react";
import { useActualizarAutor } from "../../hook/useActualizarAutor";
import { useListarAutores } from "../../hook/useAutor";

interface Props {
  autorId: number;
  onSuccess: () => void;
}

export default function ActualizarAutor({ autorId, onSuccess }: Props) {
  const { data: autores, isLoading: loadingAutores, error: errorAutores } = useListarAutores();
  const autor = autores?.find((a) => a.id === autorId);

  const [nombre, setNombre] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");

  useEffect(() => {
    if (autor) {
      setNombre(autor.nombre);
      setNacionalidad(autor.nacionalidad);
    }
  }, [autor]);

  const actualizarAutorMutation = useActualizarAutor(autorId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    actualizarAutorMutation.mutate(
      { nombre, nacionalidad },
      {
        onSuccess: () => {
          alert("Autor actualizado!");
          onSuccess();
        },
        onError: (err) => {
          alert(`Error: ${err.message}`);
        },
      }
    );
  };

  if (loadingAutores) return <p>Cargando autor...</p>;
  if (errorAutores) return <p>Error: {errorAutores.message}</p>;
  if (!autor) return <p>Autor no encontrado</p>;

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
        isLoading={actualizarAutorMutation.isPending}
      >
        Actualizar Autor
      </Button>
    </Form>
  );
}