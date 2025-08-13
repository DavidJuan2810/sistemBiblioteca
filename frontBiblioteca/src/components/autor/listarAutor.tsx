import  { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  Button,
  getKeyValue,
} from "@heroui/react";
import { useListarAutores, Autor } from "../../hook/useAutor";

interface Props {
  onEditarAutor: (id: number) => void;
  onAbrirCrearModal: () => void;
}

export default function ListaAutores({ onEditarAutor, onAbrirCrearModal }: Props) {
  const { data: autores, isLoading, error } = useListarAutores();
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = useMemo(() => {
    return autores ? Math.ceil(autores.length / rowsPerPage) : 0;
  }, [autores]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return autores?.slice(start, start + rowsPerPage) ?? [];
  }, [autores, page]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full">
      {/* Botón arriba a la izquierda (llama correctamente la prop) */}
      <div className="flex justify-start items-center mb-2">
        <Button
          className="text-sm bg-gray-300 text-gray-700"
          onPress={() => onAbrirCrearModal()} // <-- llama al modal del padre
        >
          Crear Autor
        </Button>
      </div>

      <Table
        aria-label="Lista de autores con paginación"
        bottomContent={
          pages > 0 ? (
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="default"
                page={page}
                total={pages}
                onChange={(newPage) => setPage(newPage)}
              />
            </div>
          ) : null
        }
      >
        <TableHeader>
          <TableColumn key="nombre">Nombre</TableColumn>
          <TableColumn key="nacionalidad">Nacionalidad</TableColumn>
          <TableColumn key="acciones">Acciones</TableColumn>
        </TableHeader>

        <TableBody
          items={items}
          loadingContent={<Spinner />}
          loadingState={isLoading ? "loading" : "idle"}
        >
          {(autor: Autor) => (
            <TableRow key={autor.id}>
              {(columnKey) =>
                columnKey === "acciones" ? (
                  <TableCell>
                    <Button
                      size="sm"
                      className="text-sm bg-gray-300 text-gray-700"
                      onPress={() => onEditarAutor(autor.id)}
                    >
                      Editar
                    </Button>
                  </TableCell>
                ) : (
                  <TableCell>{getKeyValue(autor, columnKey as string)}</TableCell>
                )
              }
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
