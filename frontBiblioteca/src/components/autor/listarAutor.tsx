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
  onAbrirCrearModal: () => void; // Nueva prop para abrir modal de crear
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
    <Table
      aria-label="Lista de autores con paginación"
      bottomContent={
        <div className="flex w-full justify-between items-center">
          <Button color="primary" onPress={onAbrirCrearModal}>
            Crear Autor
          </Button>
          {pages > 0 && (
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(newPage) => setPage(newPage)}
            />
          )}
        </div>
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
                    color="secondary"
                    onPress={() => onEditarAutor(autor.id)}
                  >
                    Editar
                  </Button>
                </TableCell>
              ) : (
                <TableCell>{getKeyValue(autor, columnKey)}</TableCell>
              )
            }
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}