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
import { useListarBibliotecas, Biblioteca } from "../../hook/biblioteca/useBiblioteca";

interface Props {
  onEditarBiblioteca: (id: number) => void;
  onAbrirCrearModal: () => void;
}

export default function ListaBibliotecas({ onEditarBiblioteca, onAbrirCrearModal }: Props) {
  const { data: bibliotecas, isLoading, error } = useListarBibliotecas();
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;

  const pages = useMemo(() => {
    return bibliotecas ? Math.ceil(bibliotecas.length / rowsPerPage) : 0;
  }, [bibliotecas]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return bibliotecas?.slice(start, start + rowsPerPage) ?? [];
  }, [bibliotecas, page]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <Table
      aria-label="Lista de bibliotecas con paginación"
      bottomContent={
        <div className="flex w-full justify-between items-center">
          <Button color="primary" onPress={onAbrirCrearModal}>
            Crear Biblioteca
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
        <TableColumn key="ubicacion">Ubicación</TableColumn>
        <TableColumn key="libros">Libros</TableColumn>
        <TableColumn key="acciones">Acciones</TableColumn>
      </TableHeader>
      <TableBody
        items={items}
        loadingContent={<Spinner />}
        loadingState={isLoading ? "loading" : "idle"}
      >
        {(biblioteca: Biblioteca) => (
          <TableRow key={biblioteca.id}>
            {(columnKey) => {
              if (columnKey === "acciones") {
                return (
                  <TableCell>
                    <Button
                      size="sm"
                      color="secondary"
                      onPress={() => onEditarBiblioteca(biblioteca.id)}
                    >
                      Editar
                    </Button>
                  </TableCell>
                );
              }
              if (columnKey === "libros") {
                return (
                  <TableCell>
                    {biblioteca.libros && biblioteca.libros.length > 0
                      ? biblioteca.libros.map((libro) => libro.titulo).join(", ")
                      : "Sin libros"}
                  </TableCell>
                );
              }
              return <TableCell>{getKeyValue(biblioteca, columnKey)}</TableCell>;
            }}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
