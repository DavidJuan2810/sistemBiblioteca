import { useState } from "react";
import { useDisclosure } from "@heroui/react";
import ModalGlobal from "../components/globales/modal";
import ListaAutores from "../components/autor/listarAutor";
import CrearAutor from "../components/autor/crearAutor";
import ActualizarAutor from "../components/autor/actualizarAutor";

export default function AutoresPage() {
  const { isOpen: isCrearOpen, onOpen: onCrearOpen, onOpenChange: onCrearOpenChange, onClose: onCrearClose } = useDisclosure();
  const { isOpen: isEditarOpen, onOpen: onEditarOpen, onOpenChange: onEditarOpenChange, onClose: onEditarClose } = useDisclosure();
  const [autorSeleccionadoId, setAutorSeleccionadoId] = useState<number | null>(null);

  const handleEditarAutor = (id: number) => {
    setAutorSeleccionadoId(id);
    onEditarOpen();
  };

  const handleAbrirCrearModal = () => {
    onCrearOpen();
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">Gestión de Autores</h1>

      <ListaAutores
        onEditarAutor={handleEditarAutor}
        onAbrirCrearModal={handleAbrirCrearModal}
      />

      {/* Modal para Crear */}
      <ModalGlobal
        isOpen={isCrearOpen}
        onOpenChange={onCrearOpenChange}
        title="Crear Nuevo Autor"
        children={<CrearAutor onSuccess={onCrearClose} />}
      />

      {/* Modal para Editar */}
      <ModalGlobal
        isOpen={isEditarOpen}
        onOpenChange={onEditarOpenChange}
        title="Editar Autor"
        children={
          autorSeleccionadoId && (
            <ActualizarAutor
              autorId={autorSeleccionadoId}
              onSuccess={onEditarClose}
            />
          )
        }
      />
    </div>
  );
}