import React, { useState, useEffect } from "react";
import { Form, Input, Button, DatePicker, Select, SelectItem } from "@heroui/react";
import {  fromDate, DateValue } from "@internationalized/date";
import { useActualizarLibro } from "../../hook/libro/useActualizarLibro";
import { useListarLibros } from "../../hook/libro/useLibro";
import { useListarAutores } from "../../hook/useAutor";
import { useListarBibliotecas } from "../../hook/biblioteca/useBiblioteca";

interface Props {
  libroId: number;
  onSuccess: () => void;
}

export default function ActualizarLibro({ libroId, onSuccess }: Props) {
  const { data: libros } = useListarLibros();
  const libro = libros?.find((l) => l.id === libroId);

  const { data: autores } = useListarAutores();
  const { data: bibliotecas } = useListarBibliotecas();

  const [titulo, setTitulo] = useState("");
  const [publicacion, setPublicacion] = useState<DateValue | null>(null);
  const [autorIds, setAutorIds] = useState<number[]>([]);
  const [sedeIds, setSedeIds] = useState<number[]>([]);

  useEffect(() => {
    if (libro) {
      setTitulo(libro.titulo);
      // convertir Date ISO → DateValue
      const fecha = libro.publicacion
        ? fromDate(new Date(libro.publicacion), "UTC")
        : null;
      setPublicacion(fecha);
      setAutorIds(libro.autores?.map((a) => a.id) || []);
      setSedeIds(libro.sede?.map((s) => s.id) || []);
    }
  }, [libro]);

  const actualizarLibroMutation = useActualizarLibro(libroId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    actualizarLibroMutation.mutate(
      {
        titulo,
        publicacion: publicacion ? publicacion.toString() : "",
        autorIds,
        sedeIds,
      },
      {
        onSuccess: () => {
          alert("Libro actualizado!");
          onSuccess();
        },
        onError: (err) => alert(`Error: ${err.message}`),
      }
    );
  };

  if (!libro) return <p>Libro no encontrado</p>;

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
        selectedKeys={autorIds.map(String)}
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
        selectedKeys={sedeIds.map(String)}
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
        isLoading={actualizarLibroMutation.isPending}
      >
        Actualizar Libro
      </Button>
    </Form>
  );
}
