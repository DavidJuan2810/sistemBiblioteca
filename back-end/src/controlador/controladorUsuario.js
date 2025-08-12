import { PrismaClient } from '../generated/prisma/client.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const prisma = new PrismaClient();

export const register = async (req, res) => {
  try {
    const { correo, contraseña, rol } = req.body;

    // Verificar si ya existe
    const existeUsuario = await prisma.usuario.findUnique({ where: { correo } });
    if (existeUsuario) {
      return res.status(400).json({ message: "El correo ya está registrado" });
    }

    // Hashear contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Crear usuario
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        correo,
        contraseña: hashedPassword,
        rol: rol || "Administrador"
      }
    });

    res.status(201).json({ message: "Usuario registrado", usuario: nuevoUsuario });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el registro" });
  }
};

export const login = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;

    // Buscar usuario
    const usuario = await prisma.usuario.findUnique({ where: { correo } });
    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Verificar contraseña
    const esValida = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!esValida) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    // Generar token
    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login exitoso", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el login" });
  }
};
