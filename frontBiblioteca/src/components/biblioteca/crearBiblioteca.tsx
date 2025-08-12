import React, { useState } from "react";
import { Form, Input, Button, Select, SelectItem } from "@heroui/react";
import { useCrearBiblioteca } from "../../hook/biblioteca/useCrearBiblioteca";
import { useListarLibros } from "../../hook/libro/useLibro";

interface Props {
  onSuccess: () => void;
}

export default function CrearBiblioteca({ onSuccess }: Props) {
  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [libroIds, setLibroIds] = useState<number[]>([]);

  const { data: libros } = useListarLibros();
  const crearBibliotecaMutation = useCrearBiblioteca();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    crearBibliotecaMutation.mutate(
      { nombre, ubicacion, libroIds },
      {
        onSuccess: () => {
          alert("Biblioteca creada!");
          onSuccess();
        },
        onError: (err) => {
          alert(`Error: ${err.message}`);
        },
      }
    );
  };

  return (
    <Form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        isRequired
        label="Nombre"
        labelPlacement="outside"
        placeholder="Ingrese el nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <Input
        isRequired
        label="Ubicación"
        labelPlacement="outside"
        placeholder="Ingrese la ubicación"
        value={ubicacion}
        onChange={(e) => setUbicacion(e.target.value)}
      />
      <Select
        label="Libros"
        selectionMode="multiple"
        placeholder="Seleccione los libros"
        onSelectionChange={(keys) => {
          const ids = Array.from(keys as Set<string>).map(Number);
          setLibroIds(ids);
        }}
      >
        {(libros ?? []).map((libro) => (
          <SelectItem key={libro.id}>{libro.titulo}</SelectItem>
        ))}
      </Select>
      <Button
        color="primary"
        type="submit"
        isLoading={crearBibliotecaMutation.isPending}
      >
        Crear Biblioteca
      </Button>
    </Form>
  );
}
