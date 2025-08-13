import { PrismaClient } from '../generated/prisma/client.js';  
const prisma = new PrismaClient;

// Obtener todas las bibliotecas
export const obtenerBiblioteca = async (req, res) => {
  try {
    const bibliotecas = await prisma.bibliotecas.findMany({
      include: { libros: true } 
    });
    res.json(bibliotecas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las bibliotecas.' });
  }
};

// Obtener una biblioteca por ID
export const obtenerBibliotecaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const biblioteca = await prisma.bibliotecas.findUnique({
      where: { id: parseInt(id) },
      include: { libros: true } 
    });

    if (!biblioteca) {
      return res.status(404).json({ message: 'Biblioteca no encontrada.' });
    }

    res.json(biblioteca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la biblioteca.' });
  }
};

// Crear una nueva biblioteca
export const crearBiblioteca = async (req, res) => {
  try {
    const { nombre, ubicacion, libroIds } = req.body; // Cambiado de 'libro' a 'libroIds'

    const nuevaBiblioteca = await prisma.bibliotecas.create({
      data: {
        nombre,
        ubicacion,
        libros: libroIds ? { connect: libroIds.map(id => ({ id })) } : undefined
      },
      include: { libros: true } 
    });

    res.status(200).json(nuevaBiblioteca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la biblioteca.' });
  }
};

// Actualizar completamente una biblioteca (PUT)
export const actualizarBiblioteca = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, ubicacion, libros } = req.body;

    const bibliotecaExistente = await prisma.bibliotecas.findUnique({
      where: { id: parseInt(id) }
    });

    if (!bibliotecaExistente) {
      return res.status(404).json({ message: 'Biblioteca no encontrada.' });
    }

    const bibliotecaActualizada = await prisma.bibliotecas.update({
      where: { id: parseInt(id) },
      data: {
        nombre,
        ubicacion,
        libros: libros ? { set: libros.map(id => ({ id })) } : undefined 
      },
      include: { libros: true } 
    });

    res.json(bibliotecaActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la biblioteca.' });
  }
};


// Eliminar una biblioteca
export const eliminarBiblioteca = async (req, res) => {
  try {
    const { id } = req.params;

    const bibliotecaExistente = await prisma.bibliotecas.findUnique({
      where: { id: parseInt(id) }
    });

    if (!bibliotecaExistente) {
      return res.status(404).json({ message: 'Biblioteca no encontrada.' });
    }

    await prisma.bibliotecas.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Biblioteca eliminada correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la biblioteca.' });
  }
};