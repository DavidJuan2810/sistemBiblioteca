import React, { useState, useEffect } from "react";
import { Form, Input, Button, DatePicker, Select, SelectItem } from "@heroui/react";
import { DateValue, parseDate } from "@internationalized/date";
import { useActualizarLibro } from "../../hook/libro/useActualizarLibro";
import { useListarAutores } from "../../hook/useAutor";
import { useListarBibliotecas } from "../../hook/biblioteca/useBiblioteca";
import { useListarLibros } from "../../hook/libro/useLibro";
import { useToast } from "../globales/toast";

interface Props {
  libroId: number;
  onSuccess: () => void;
}

export default function ActualizarLibro({ libroId, onSuccess }: Props) {
  const { showToast } = useToast();
  const { data: libros, isLoading, error } = useListarLibros();
  const { data: autores } = useListarAutores();
  const { data: bibliotecas } = useListarBibliotecas();
  const actualizarLibroMutation = useActualizarLibro(libroId);

  const libro = libros?.find((l) => l.id === libroId);

  const [titulo, setTitulo] = useState("");
  const [publicacion, setPublicacion] = useState<DateValue | null>(null);
  const [autor, setAutor] = useState<number[]>([]);
  const [sede, setSede] = useState<number[]>([]);

  useEffect(() => {
    if (libro) {
      setTitulo(libro.titulo);
      setPublicacion(parseDate(libro.publicacion.split("T")[0]));
      setAutor(libro.autores?.map((a) => a.id) || []);
      setSede(libro.sede?.map((s) => s.id) || []);
    }
  }, [libro]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!titulo.trim()) {
      showToast("El título es obligatorio", "error");
      return;
    }
    if (!publicacion) {
      showToast("La fecha de publicación es obligatoria", "error");
      return;
    }
    if (autor.length === 0) {
      showToast("Debe seleccionar al menos un autor", "error");
      return;
    }
    if (sede.length === 0) {
      showToast("Debe seleccionar al menos una sede", "error");
      return;
    }

    const publicacionISO = new Date(
      publicacion.year,
      publicacion.month - 1,
      publicacion.day
    ).toISOString();

    actualizarLibroMutation.mutate(
      { titulo, publicacion: publicacionISO, autor, sede },
      {
        onSuccess: () => {
          showToast("Libro actualizado correctamente", "success");
          onSuccess();
        },
        onError: (err) => {
          showToast(`Error: ${err.message}`, "error");
        },
      }
    );
  };

  if (isLoading) return <p>Cargando libro...</p>;
  if (error) return <p>Error: {error.message}</p>;
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
        selectedKeys={autor.map(String)}
        onSelectionChange={(keys) => setAutor(Array.from(keys as Set<string>).map(Number))}
      >
        {(autores ?? []).map((a) => (
          <SelectItem key={a.id}>{a.nombre}</SelectItem>
        ))}
      </Select>
      <Select
        label="Sedes"
        selectionMode="multiple"
        selectedKeys={sede.map(String)}
        onSelectionChange={(keys) => setSede(Array.from(keys as Set<string>).map(Number))}
      >
        {(bibliotecas ?? []).map((b) => (
          <SelectItem key={b.id}>{b.nombre}</SelectItem>
        ))}
      </Select>
      <Button
        className="text-sm bg-gray-300 text-gray-700"
        type="submit"
        isLoading={actualizarLibroMutation.isPending}
      >
        Actualizar Libro
      </Button>
    </Form>
  );
}
