// Aquí se almacenan los enlaces y es capaz de eliminarlos, listarlos, entre otros

const express = require("express");
const appServer = express();
const router = express.Router();
const conDB = require("../models/database")



router.get('/prueba',(req,res)=>{
    res.send({
        name:"Stiven",
        age:32
    })
})


module.exports=router;
