import { useMutation, useQueryClient, UseMutationResult } from "@tanstack/react-query";
import axios from "axios";

// ✅ Cambiamos 'libros' a 'libroIds' para que coincida con lo que enviamos desde el frontend
export interface ActualizarBibliotecaPayload {
  nombre: string;
  ubicacion: string;
  libroIds?: number[];
}

export interface Biblioteca {
  id: number;
  nombre: string;
  ubicacion: string;
  libros?: { id: number; titulo: string }[];
}

export const useActualizarBiblioteca = (
  id: number
): UseMutationResult<Biblioteca, Error, ActualizarBibliotecaPayload> => {
  const queryClient = useQueryClient();

  return useMutation<Biblioteca, Error, ActualizarBibliotecaPayload>({
    mutationFn: async (bibliotecaActualizada) => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token no encontrado");

      const apiUrl = import.meta.env.VITE_API_URL;

      const { data } = await axios.put(
        `${apiUrl}/biblioteca/${id}`,
        bibliotecaActualizada, // ✅ ahora envía libroIds
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bibliotecas"] });
      queryClient.invalidateQueries({ queryKey: ["biblioteca", id] });
    },
  });
};
