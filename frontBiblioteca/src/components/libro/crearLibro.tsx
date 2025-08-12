import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Select, SelectItem } from "@heroui/react";
import { DateValue } from "@internationalized/date";
import { useCrearLibro } from "../../hook/libro/useCrearLibro";
import { useListarAutores } from "../../hook/useAutor";
import { useListarBibliotecas } from "../../hook/biblioteca/useBiblioteca";

interface Props {
  onSuccess: () => void;
}

export default function CrearLibro({ onSuccess }: Props) {
  const [titulo, setTitulo] = useState("");
  const [publicacion, setPublicacion] = useState<DateValue | null>(null);
  const [autorIds, setAutorIds] = useState<number[]>([]);
  const [sedeIds, setSedeIds] = useState<number[]>([]);

  const { data: autores } = useListarAutores();
  const { data: bibliotecas } = useListarBibliotecas();
  const crearLibroMutation = useCrearLibro();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    crearLibroMutation.mutate(
      {
        titulo,
        publicacion: publicacion ? publicacion.toString() : "",
        autorIds,
        sedeIds,
      },
      {
        onSuccess: () => {
          alert("Libro creado!");
          onSuccess();
        },
        onError: (err) => alert(`Error: ${err.message}`),
      }
    );
  };

  return (
    <Form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input
        isRequired
        label="Título"
        labelPlacement="outside"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <DatePicker
        isRequired
        label="Fecha de publicación"
        labelPlacement="outside"
        value={publicacion}
        onChange={(date) => setPublicacion(date)}
      />
      <Select
        label="Autores"
        selectionMode="multiple"
        onSelectionChange={(keys) =>
          setAutorIds(Array.from(keys as Set<string>).map(Number))
        }
      >
        {(autores ?? []).map((a) => (
          <SelectItem key={a.id}>{a.nombre}</SelectItem>
        ))}
      </Select>
      <Select
        label="Sedes"
        selectionMode="multiple"
        onSelectionChange={(keys) =>
          setSedeIds(Array.from(keys as Set<string>).map(Number))
        }
      >
        {(bibliotecas ?? []).map((b) => (
          <SelectItem key={b.id}>{b.nombre}</SelectItem>
        ))}
      </Select>
      <Button
        color="primary"
        type="submit"
        isLoading={crearLibroMutation.isPending}
      >
        Crear Libro
      </Button>
    </Form>
  );
}
