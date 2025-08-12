import { useMemo, useState } from "react";
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
import { useListarLibros, Libro } from "../../hook/libro/useLibro";

interface Props {
  onEditarLibro: (id: number) => void;
  onAbrirCrearModal: () => void;
}

export default function ListaLibros({ onEditarLibro, onAbrirCrearModal }: Props) {
  const { data: libros, isLoading, error } = useListarLibros();
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = useMemo(() => {
    return libros ? Math.ceil(libros.length / rowsPerPage) : 0;
  }, [libros]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return libros?.slice(start, start + rowsPerPage) ?? [];
  }, [libros, page]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Table
      aria-label="Lista de libros con paginación"
      bottomContent={
        <div className="flex w-full justify-between items-center">
          <Button color="primary" onPress={onAbrirCrearModal}>
            Crear Libro
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
        <TableColumn key="titulo">Título</TableColumn>
        <TableColumn key="publicacion">Publicación</TableColumn>
        <TableColumn key="autores">Autores</TableColumn>
        <TableColumn key="sede">Sedes</TableColumn>
        <TableColumn key="acciones">Acciones</TableColumn>
      </TableHeader>
      <TableBody
        items={items}
        loadingContent={<Spinner />}
        loadingState={isLoading ? "loading" : "idle"}
      >
        {(libro: Libro) => (
          <TableRow key={libro.id}>
            {(columnKey) => {
              if (columnKey === "acciones") {
                return (
                  <TableCell>
                    <Button
                      size="sm"
                      color="secondary"
                      onPress={() => onEditarLibro(libro.id)}
                    >
                      Editar
                    </Button>
                  </TableCell>
                );
              }
              if (columnKey === "autores") {
                return (
                  <TableCell>
                    {libro.autores?.map((a) => a.nombre).join(", ") || "—"}
                  </TableCell>
                );
              }
              if (columnKey === "sede") {
                return (
                  <TableCell>
                    {libro.sede?.map((s) => s.nombre).join(", ") || "—"}
                  </TableCell>
                );
              }
              if (columnKey === "publicacion") {
                return (
                  <TableCell>
                    {new Date(libro.publicacion).toLocaleDateString()}
                  </TableCell>
                );
              }
              return <TableCell>{getKeyValue(libro, columnKey)}</TableCell>;
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
