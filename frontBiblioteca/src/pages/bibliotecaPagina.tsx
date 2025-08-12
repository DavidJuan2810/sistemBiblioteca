import { useState } from "react";
import { useDisclosure } from "@heroui/react";
import ModalGlobal from "../components/globales/modal";
import ListaBibliotecas from "../components/biblioteca/listarBiblioteca";
import CrearBiblioteca from "../components/biblioteca/crearBiblioteca";
import ActualizarBiblioteca from "../components/biblioteca/actualizarBiblioteca";

export default function BibliotecasPage() {
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

  const [bibliotecaSeleccionadaId, setBibliotecaSeleccionadaId] = useState<number | null>(null);

  const handleEditarBiblioteca = (id: number) => {
    setBibliotecaSeleccionadaId(id);
    onEditarOpen();
  };

  const handleAbrirCrearModal = () => {
    onCrearOpen();
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold mb-4">Gestión de Bibliotecas</h1>

      <ListaBibliotecas
        onEditarBiblioteca={handleEditarBiblioteca}
        onAbrirCrearModal={handleAbrirCrearModal}
      />

      {/* Modal para Crear */}
      <ModalGlobal
        isOpen={isCrearOpen}
        onOpenChange={onCrearOpenChange}
        title="Crear Nueva Biblioteca"
        children={<CrearBiblioteca onSuccess={onCrearClose} />}
      />

      {/* Modal para Editar */}
      <ModalGlobal
        isOpen={isEditarOpen}
        onOpenChange={onEditarOpenChange}
        title="Editar Biblioteca"
        children={
          bibliotecaSeleccionadaId && (
            <ActualizarBiblioteca
              bibliotecaId={bibliotecaSeleccionadaId}
              onSuccess={onEditarClose}
            />
          )
        }
      />
    </div>
  );
}
