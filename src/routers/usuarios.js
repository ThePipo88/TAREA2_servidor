const express = require("express");
const UsuariosController = require("../controller/usuarios");

const api = express.Router();

api.get("/obtener/", UsuariosController.findAll);
api.get("/login/:usuario/:contrasena", UsuariosController.findByNameAndPassword);
api.post("/usuarios/crear/", UsuariosController.createUser);
api.put("/usuarios/actualizar/", UsuariosController.actualizarUsuario);
api.delete("/usuarios/eliminar/:id", UsuariosController.eliminarUsuario);

module.exports = api;