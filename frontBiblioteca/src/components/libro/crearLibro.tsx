import React, { useState } from "react";
import { Form, Input, Button, DatePicker, Select, SelectItem } from "@heroui/react";
import { DateValue } from "@internationalized/date";
import { useCrearLibro } from "../../hook/libro/useCrearLibro";
import { useListarAutores } from "../../hook/useAutor";
import { useListarBibliotecas } from "../../hook/biblioteca/useBiblioteca";
import { useToast } from "../globales/toast";

interface Props {
  onSuccess: () => void;
}

export default function CrearLibro({ onSuccess }: Props) {
  const [titulo, setTitulo] = useState("");
  const [publicacion, setPublicacion] = useState<DateValue | null>(null);
  const [autor, setAutor] = useState<number[]>([]);
  const [sede, setSede] = useState<number[]>([]);

  const { showToast } = useToast();
  const { data: autores } = useListarAutores();
  const { data: bibliotecas } = useListarBibliotecas();
  const crearLibroMutation = useCrearLibro();

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

    crearLibroMutation.mutate(
      { titulo, publicacion: publicacionISO, autor, sede },
      {
        onSuccess: () => {
          showToast("Libro creado correctamente", "success");
          onSuccess();
        },
        onError: (err) => {
          showToast(`Error: ${err.message}`, "error");
        },
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
        isLoading={crearLibroMutation.isPending}
      >
        Crear Libro
      </Button>
    </Form>
  );
}
