import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Autor {
  id: number;
  nombre: string;
  nacionalidad: string;
  libro?: { id: number; titulo: string }[];
}

export const useListarAutores = () => {
  return useQuery<Autor[], Error>({
    queryKey: ["autores"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Token no encontrado");

      const apiUrl = import.meta.env.VITE_API_URL;

      const { data } = await axios.get(`${apiUrl}/autor`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    },
  });
};