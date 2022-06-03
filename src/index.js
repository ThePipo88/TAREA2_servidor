//Configuracion a la base de datos

const app = require("./app");
const port = process.env.PORT || 5000;
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");

//mongoose.set("useFindAndModify", false);

console.log("La conexion a la base de datos es correcta.");
app.listen(port, () => {
  console.log("####################");
  console.log("##### API REST #####");
  console.log("####################");
  console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);
});
