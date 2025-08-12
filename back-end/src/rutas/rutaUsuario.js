import { Router } from "express";
import { register, login } from "../controlador/controladorUsuario.js";
import { verificarToken } from "../middleware/auth.js";

const rutaUsuario = Router();

rutaUsuario.post("/register", register);
rutaUsuario.post("/login", login);

// Ejemplo de ruta protegida
rutaUsuario.get("/perfil", verificarToken, (req, res) => {
  res.json({ message: "Accediste a tu perfil", usuario: req.usuario });
});

export default rutaUsuario;
