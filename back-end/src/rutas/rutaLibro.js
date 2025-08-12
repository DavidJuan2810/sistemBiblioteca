import { Router } from "express";
import { verificarToken, soloAdmin } from "../middleware/auth.js";
import { obtenerLibros, obtenerLibroPorId, crearLibro, actualizarLibro, eliminarLibro } from "../controlador/controladorLibro.js";

const rutaLibro = Router()
rutaLibro.get("/libro",verificarToken, soloAdmin, obtenerLibros)
rutaLibro.get("/libro/:id",verificarToken, soloAdmin, obtenerLibroPorId)
rutaLibro.post("/libro",verificarToken, soloAdmin, crearLibro)
rutaLibro.put("/libro/:id",verificarToken, soloAdmin, actualizarLibro)
rutaLibro.delete("libro/:id",verificarToken, soloAdmin, eliminarLibro)


export default rutaLibro;