import { useMutation, useQueryClient, UseMutationResult } from "@tanstack/react-query";
import axios from "axios";

export interface CrearBibliotecaPayload {
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

export const useCrearBiblioteca = (): UseMutationResult<
  Biblioteca,
  Error,
  CrearBibliotecaPayload
> => {
  const queryClient = useQueryClient();

  return useMutation<Biblioteca, Error, CrearBibliotecaPayload>({
    mutationFn: async (nuevaBiblioteca) => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token no encontrado");

      const apiUrl = import.meta.env.VITE_API_URL;

      const { data } = await axios.post(`${apiUrl}/biblioteca`, nuevaBiblioteca, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bibliotecas"] });
    },
  });
};
