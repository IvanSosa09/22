const express = require("express");
const Modelmsj = require("../model/mensajes")

const { Router }  = express;
const route = new Router();

route.get("/",async(req,res)=>{
    const leer = await Modelmsj.find();
    res.json({mensajes:leer});
})

route.post("/",async(req,res)=>{
    try{
        let {id,nombre,apellido,edad,alias,avatar,mensaje} = req.body
        const guardar = new Modelmsj({id,nombre,apellido,edad,alias,avatar,mensaje})
        await guardar.save();
        res.json({mensaje:"datos guardados"})
    }catch{
        res.json({msj:"error al guardar datos"})
    }
    
})

module.exports = route;