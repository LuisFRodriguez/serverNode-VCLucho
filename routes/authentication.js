// en este archivo se guardan las rutas de login como son:
/**
 * sign UP
 * sing In
 * 
 */

const express = require("express");
const router = express.Router();

router.get('/pruebaAuth', (req,res,next)=>{
    res.json({
        nombre:"STIVEN ROJAS PULIDO"
    })
})





module.exports=router;
