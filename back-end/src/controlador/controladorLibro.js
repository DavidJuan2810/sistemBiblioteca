import { PrismaClient } from "../generated/prisma/client.js";
const prisma = new PrismaClient

// aqui es para obtener o llamar todos los libros
export const obtenerLibros = async (req, res) => {
    try{
        const libros = await prisma.libro.findMany({
            include: {sede: true, autores: true}
        });
        res.json(libros)
    } catch (error) {
        console.error(error)
        res.status(500).json({message: 'error al obtener libros'})
    }
};

// aqui podemos llamar un libro por su id
export const obtenerLibroPorId = async (req, res) => {
    try{
        const {id} = req.params;
        const libros = await prisma.libro.findUnique({
            where: {id: parseInt(id)},
            include: {sede: true, autores: true}
        });
        
        if (!libros) {
            return res.status(404).json({message: "No se encontro este libro"});
        }

        res.json(libros);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "error en servidor"})
    }
};

// aqui podremos crear un libro 
export const crearLibro = async (req, res) => {
    try{
        const {titulo, publicacion, sede, autor} = req.body;

        const nuevoLibro = await prisma.libro.create({
            data: {
                titulo,
                publicacion,
                sede: sedeId ? {connect: sede.map(id => ({id})) } : undefined,
                autores: autorId ? {connect: autor.map(id => ({id})) } : undefined
            },
            include: {sede: true, autores: true}
        });
        res.status(200).json(nuevoLibro);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "error en el servidor"});
    }

};


//aqui actualizamos todos los campos de los libros
export const actualizarLibro = async (req, res) => {
    try{
        const {id} = req.params;
        const {titulo, publicacion, sede, autor} = req.body;

        const libroExistente = await prisma.libro.findUnique({
            where: { id: parseInt(id) }
        })

        if (!libroExistente) {
            return res.status(404).json({ message: 'libro no encontrado.' });
        }

        const libroActualizado = await prisma.libro.update({
            where: {id: parseInt(id)},
            data: {
                titulo,
                publicacion,
                sede: sede ? {connect: sede.map(id => ({id})) } : undefined,
                autores: autor ? {connect: autor.map(id => ({id})) } : undefined
            },
            include: {sede: true, autores: true}
        });
        res.json(libroActualizado);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "error en el servidor"})
    }
};

//aqui podemos eliminar el registro del libro

export const eliminarLibro = async (req, res) => {
    try{
        const {id} = req.params;
        const libroExistente = await prisma.libro.findUnique({
            where: {id: parseInt(id)}
        });

        if (!libroExistente) {
            return res.status(404).json({message: "Libro no encontrado"});
        }

        await prisma.libro.delete({
            where: {id: parseInt(id)}
        });

        res.json({message: "Libro eliminado correctamente"})
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "error en el servidor"});
    }
};
