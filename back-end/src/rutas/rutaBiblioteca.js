import { Router } from 'express';
import { verificarToken, soloAdmin } from "../middleware/auth.js";
import { obtenerBiblioteca, obtenerBibliotecaPorId, crearBiblioteca, actualizarBiblioteca, eliminarBiblioteca } from '../controlador/controladorBibliotecas.js';
const rutaBiblioteca = Router();

rutaBiblioteca.get('/biblioteca',verificarToken, soloAdmin,obtenerBiblioteca);
rutaBiblioteca.get('/biblioteca/:id',verificarToken, soloAdmin,obtenerBibliotecaPorId);
rutaBiblioteca.post('/biblioteca',verificarToken, soloAdmin, crearBiblioteca);
rutaBiblioteca.put('/biblioteca/:id',verificarToken, soloAdmin,actualizarBiblioteca);
rutaBiblioteca.delete('/biblioteca/:id',verificarToken, soloAdmin,eliminarBiblioteca);

export default rutaBiblioteca;