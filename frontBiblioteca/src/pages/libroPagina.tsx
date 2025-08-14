import { useState } from "react";
import { useDisclosure } from "@heroui/react";
import ModalGlobal from "../components/globales/modal";
import ListaLibros from "../components/libro/listarLibro";
import CrearLibro from "../components/libro/crearLibro";
import ActualizarLibro from "../components/libro/actualizarLibro";
import { useListarLibros } from "../hook/libro/useLibro";
import { Spinner } from "@heroui/react";

export default function LibrosPage() {
  const {
    isOpen: isCrearOpen,
    onOpen: onCrearOpen,
    onOpenChange: onCrearOpenChange,
    onClose: onCrearClose,
  } = useDisclosure();

  const {
    isOpen: isEditarOpen,
    onOpen: onEditarOpen,
    onOpenChange: onEditarOpenChange,
    onClose: onEditarClose,
  } = useDisclosure();

  const {
    isOpen: isVerOpen,
    onOpen: onVerOpen,
    onOpenChange: onVerOpenChange,
  } = useDisclosure(); // Removed onClose: onVerClose

  const [libroSeleccionadoId, setLibroSeleccionadoId] = useState<number | null>(null);
  const [libroViewId, setLibroViewId] = useState<number | null>(null);
  const { data: libros, isLoading, error } = useListarLibros();

  const handleEditarLibro = (id: number) => {
    setLibroSeleccionadoId(id);
    onEditarOpen();
  };

  const handleVerLibro = (id: number) => {
    setLibroViewId(id);
    onVerOpen();
  };

  const handleAbrirCrearModal = () => {
    onCrearOpen();
  };

  // Find the selected book from the libros data
  const libroSeleccionado = libros?.find((libro) => libro.id === libroViewId);

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">Gestión de Libros</h1>

      <ListaLibros
        onEditarLibro={handleEditarLibro}
        onVerLibro={handleVerLibro}
        onAbrirCrearModal={handleAbrirCrearModal}
      />

      {/* Modal para Crear */}
      <ModalGlobal
        isOpen={isCrearOpen}
        onOpenChange={onCrearOpenChange}
        title="Crear Nuevo Libro"
        children={<CrearLibro onSuccess={onCrearClose} />}
      />

      {/* Modal para Editar */}
      <ModalGlobal
        isOpen={isEditarOpen}
        onOpenChange={onEditarOpenChange}
        title="Editar Libro"
        children={
          libroSeleccionadoId && (
            <ActualizarLibro
              libroId={libroSeleccionadoId}
              onSuccess={onEditarClose}
            />
          )
        }
      />

      {/* Modal para Consultar Detalles */}
      <ModalGlobal
        isOpen={isVerOpen}
        onOpenChange={onVerOpenChange}
        title="Detalles del Libro"
        children={
          isLoading ? (
            <Spinner />
          ) : error ? (
            <div>Error al cargar los datos: {error.message}</div>
          ) : libroSeleccionado ? (
            <div className="flex flex-col gap-4 text-gray-200">
              <div>
                <strong className="font-semibold">Título:</strong> {libroSeleccionado.titulo}
              </div>
              <div>
                <strong className="font-semibold">Publicación:</strong>{" "}
                {new Date(libroSeleccionado.publicacion).toLocaleDateString()}
              </div>
              <div>
                <strong className="font-semibold">Autores:</strong>{" "}
                {libroSeleccionado.autores?.map((a) => a.nombre).join(", ") || "Ninguno"}
              </div>
              <div>
                <strong className="font-semibold">Sedes:</strong>{" "}
                {libroSeleccionado.sede?.map((s) => s.nombre).join(", ") || "Ninguna"}
              </div>
            </div>
          ) : (
            <div>No se encontró el libro</div>
          )
        }
      />
    </div>
  );
}