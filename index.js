//importaciones
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const { normalize, schema } = require("normalizr");

require("./database/db");
const rutamensaje = require("./routes/rutamensaje");
const fakerdata = require("./routes/mocks");
const Model = require("./model/mensajes");
const util = require("util")
//configuracion
const PORT = process.env.PORT || 8080;

//middlewares
app.use(express.json());
app.use(express.static(__dirname + "/public"));

//rutas
app.use("/mensajes", rutamensaje);
app.use("/api", fakerdata);

//socket io
io.on("connection", (socket) => {
  console.log("usuario conectado");

  //OBTENGO DATOS DEL CLIENTE Y LOS GUARDO EN LA BASE DE DATOS
  socket.on("nuevodato", async (data) => {
    await Model.insertMany(data);
  });

    //ENVIO DE USUARIOS Y MENSAJES DESDE LA BASE DE DATOS
  const EnviarData = async () => {
    let obj = await Model.find();
    // console.log(util.inspect(normalizePost,false,12,true))
    socket.emit("mensaje", obj);
  };
  EnviarData();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/chat.html");
});

server.listen(PORT, (req, res) => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});
