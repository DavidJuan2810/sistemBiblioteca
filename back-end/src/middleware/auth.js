// middlewares/auth.js
import jwt from "jsonwebtoken";

// Verificar si el usuario está autenticado
export const verificarToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(403).json({ message: "Token requerido" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded; // Guardamos los datos del usuario
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido o expirado" });
  }
};

// Verificar si el usuario es administrador
export const soloAdmin = (req, res, next) => {
  if (req.usuario.rol !== "Administrador") {
    return res.status(403).json({ message: "Acceso restringido a Administradores" });
  }
  next();
};
