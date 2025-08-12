import { useState } from "react";
import { useDisclosure } from "@heroui/react";
import ModalGlobal from "../components/globales/modal";
import ListaLibros from "../components/libro/listarLibro";
import CrearLibro from "../components/libro/crearLibro";
import ActualizarLibro from "../components/libro/actualizarLibro";

export default function LibrosPage() {
  const {
    isOpen: isCrearOpen,
    onOpen: onCrearOpen,
    onOpenChange: onCrearOpenChange,
    onClose: onCrearClose
  } = useDisclosure();

  const {
    isOpen: isEditarOpen,
    onOpen: onEditarOpen,
    onOpenChange: onEditarOpenChange,
    onClose: onEditarClose
  } = useDisclosure();

  const [libroSeleccionadoId, setLibroSeleccionadoId] = useState<number | null>(null);

  const handleEditarLibro = (id: number) => {
    setLibroSeleccionadoId(id);
    onEditarOpen();
  };

  const handleAbrirCrearModal = () => {
    onCrearOpen();
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">Gestión de Libros</h1>

      <ListaLibros
        onEditarLibro={handleEditarLibro}
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
    </div>
  );
}
