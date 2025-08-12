import { useMutation, useQueryClient, UseMutationResult } from "@tanstack/react-query";
import axios from "axios";

export interface CrearLibroPayload {
  titulo: string;
  publicacion: string; // ISO date string
  autorIds?: number[];
  sedeIds?: number[];
}

export interface Libro {
  id: number;
  titulo: string;
  publicacion: string;
  autores?: { id: number; nombre: string }[];
  sede?: { id: number; nombre: string }[];
}

export const useCrearLibro = (): UseMutationResult<Libro, Error, CrearLibroPayload> => {
  const queryClient = useQueryClient();

  return useMutation<Libro, Error, CrearLibroPayload>({
    mutationFn: async (nuevoLibro) => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token no encontrado");

      const apiUrl = import.meta.env.VITE_API_URL;

      const { data } = await axios.post(`${apiUrl}/libro`, nuevoLibro, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["libros"] });
    },
  });
};
