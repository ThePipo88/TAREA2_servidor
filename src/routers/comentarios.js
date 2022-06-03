const express = require("express");
const ComentariosController = require("../controller/comentarios");

const api = express.Router();

api.get("/comentarios/obtener", ComentariosController.findAll);
api.post("/comentarios/postear", ComentariosController.putComment);

module.exports = api;