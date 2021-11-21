const { Schema, model } = require("mongoose");

const mensajes = new Schema({
   id: { type: String, required: true },
   nombre: { type: String, required: true },
   apellido: { type: String, required: true },
   edad: { type: Number, required: true },
   alias: { type: String, required: true },
   avatar: { type: String, required: true },
  mensaje: { type: String, required: true },
});

module.exports = model("mensaje", mensajes);
