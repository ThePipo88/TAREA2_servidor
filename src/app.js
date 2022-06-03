//Configuracion basica

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { API_VERSION } = require('./config');

//Load routings...
const usuariosRoutes = require('./routers/usuarios');
const comentariosRoutes = require('./routers/comentarios');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(`/api/${API_VERSION}`, usuariosRoutes);
app.use(`/api/${API_VERSION}`, comentariosRoutes);

module.exports = app;