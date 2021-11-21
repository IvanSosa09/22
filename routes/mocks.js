const express = require("express");
const { Router } = express;
const route = new Router();
const fs = require("fs");
const faker = require("faker");

// const productsRamdon = [];

// for (let i = 0; i < 10; i++) {
//     productsRamdon.push({
//     name: faker.commerce.product(),
//     price: faker.datatype.number({
//       min: 10,
//       max: 50,
//     }),
//     image:faker.random.image()
//   });
// }

// fs.writeFile("../datamock.json",JSON.stringify(productsRamdon,null,2),(err)=>{
//     if(err) console.log("error al crear")
//     console.log("datos mocks ok!")
// })

route.get("/productostest", async(req, res) => {
    let read = await fs.promises.readFile("./datamock.json","utf-8")
    let data = JSON.parse(read);
    res.json({productosRamdom:data})
});

module.exports = route;
