import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; // Importar dotenv
import rutaBiblioteca from './src/rutas/rutaBiblioteca.js';
import rutaLibro from './src/rutas/rutaLibro.js';
import rutaAutor from './src/rutas/rutaAutor.js';
import rutaUsuario from './src/rutas/rutaUsuario.js';
dotenv.config({ override: true, debug: false });
const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173', // Permitir solo el frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());

// Rutas
app.use('/api', rutaBiblioteca);
app.use('/api', rutaLibro);
app.use('/api', rutaAutor);
app.use('/api', rutaUsuario);

// Iniciando el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});