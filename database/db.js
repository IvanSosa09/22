const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ivansosa:ivancoder123@clustercoder.uppwp.mongodb.net/coderdb?retryWrites=true&w=majority");
mongoose.connection.on("open",()=>{
    console.log("se establecio la conexion exitosamente")
});
mongoose.connection.on("error",()=>{
    console.log("fallo al conectar con la base de datos! ")
})