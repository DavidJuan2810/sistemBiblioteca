import { PrismaClient } from '../generated/prisma/client.js';
const prisma = new PrismaClient();

// Obtener todos los autores
export const obtenerAutores = async (req, res) => {
  try {
    const autores = await prisma.autor.findMany({
      include: {
        libro: {
          select: {
            id: true,
            titulo: true, 
            sede: true, 
          },
        },
      },
    });
    res.json(autores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los autores.' });
  }
};

// Obtener un autor por ID
export const obtenerAutorPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const autor = await prisma.autor.findUnique({
      where: { id: parseInt(id) },
      include: {
        libro: {
          include: {
            sede: true,
            autores: true,
          },
        },
      },
    });

    if (!autor) {
      return res.status(404).json({ message: 'Autor no encontrado.' });
    }

    res.json(autor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener el autor.' });
  }
};

// Crear un autor
export const crearAutor = async (req, res) => {
  try {
    const { nombre, nacionalidad, libroIds } = req.body;

    const nuevoAutor = await prisma.autor.create({
      data: {
        nombre,
        nacionalidad,
        libro: libroIds?.length
          ? { connect: libroIds.map(id => ({ id })) }
          : undefined
      },
      include: {
        libro: {
          include: {
            sede: true,
            autores: true
          }
        }
      }
    });

    res.status(201).json(nuevoAutor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el autor.' });
  }
};

// Actualizar completamente un autor
export const actualizarAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, nacionalidad, libroIds } = req.body;

    const autorExistente = await prisma.autor.findUnique({
      where: { id: parseInt(id) }
    });

    if (!autorExistente) {
      return res.status(404).json({ message: 'Autor no encontrado.' });
    }

    const autorActualizado = await prisma.autor.update({
      where: { id: parseInt(id) },
      data: {
        nombre,
        nacionalidad,
        libro: libroIds?.length
          ? { set: libroIds.map(id => ({ id })) }
          : undefined
      },
      include: {
        libro: {
          include: {
            sede: true,
            autores: true
          }
        }
      }
    });

    res.json(autorActualizado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el autor.' });
  }
};

// Eliminar un autor
export const eliminarAutor = async (req, res) => {
  try {
    const { id } = req.params;

    const autorExistente = await prisma.autor.findUnique({
      where: { id: parseInt(id) }
    });

    if (!autorExistente) {
      return res.status(404).json({ message: 'Autor no encontrado.' });
    }

    await prisma.autor.delete({
      where: { id: parseInt(id) }
    });

    res.json({ message: 'Autor eliminado correctamente.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el autor.' });
  }
};
