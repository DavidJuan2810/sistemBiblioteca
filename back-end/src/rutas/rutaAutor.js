import { Router } from "express";
import { verificarToken, soloAdmin } from "../middleware/auth.js";
import { obtenerAutores, obtenerAutorPorId, crearAutor, actualizarAutor, eliminarAutor} from "../controlador/controladorAutor.js";

const rutaAutor = Router()

rutaAutor.get("/autor",verificarToken, soloAdmin, obtenerAutores)
rutaAutor.get("/autor/:id",verificarToken, soloAdmin,  obtenerAutorPorId)
rutaAutor.post("/autor",verificarToken, soloAdmin,  crearAutor)
rutaAutor.put("/autor/:id",verificarToken, soloAdmin,  actualizarAutor)
rutaAutor.delete("/autor/:id",verificarToken, soloAdmin,  eliminarAutor)

export default rutaAutor;
