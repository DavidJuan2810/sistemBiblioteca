import prisma from "../prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registrarUsuario = async (req, res) => {
  try {
    const { correo, contraseña, rol } = req.body;

    const hashedPassword = await bcrypt.hash(contraseña, 10);
    const nuevoUsuario = await prisma.usuario.create({
      data: {
        correo,
        contraseña: hashedPassword,
        rol
      }
    });

    res.json({ message: "Usuario registrado", usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ message: "Error al registrar usuario", error });
  }
};

export const loginUsuario = async (req, res) => {
  try {
    const { correo, contraseña } = req.body;
    const usuario = await prisma.usuario.findUnique({ where: { correo } });

    if (!usuario) return res.status(404).json({ message: "Usuario no encontrado" });

    const valido = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!valido) return res.status(401).json({ message: "Contraseña incorrecta" });

    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Error en el login", error });
  }
};
