const express = require("express");
const UsuariosController = require("../controller/usuarios");

const api = express.Router();

api.get("/obtener/", UsuariosController.findAll);
api.get("/login/:usuario/:contrasena", UsuariosController.findByNameAndPassword);

module.exports = api;