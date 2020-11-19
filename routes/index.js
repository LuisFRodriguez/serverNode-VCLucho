//Este es el archivo principal de las rutas.  

const express = require("express");
const router = express.Router();
const controllers=require("../controllers/index")
const mysql = require ("mysql");
//const path = require('path');



router.get ('/login',controllers.dataPet);

router.get('/pruebaJsonUE',controllers.sirveJson);

router.get('/', controllers.getData);

router.get('/consultarDB', (req,res,next)=>{
    controllers.consultaData().then(result=>{
      res.send(result)
      console.log("**The consult was successful**")
    }).catch(err=>{
        console.log(err)
    })

})


router.post('/user',(req,res,next)=>{
    controllers.contrInsertDataPer(req.body.Codigo_Persona, req.body.Nombre,req.body.Telefono,req.body.Usuario,req.body.Password ).then(result=>{
        console.log(result)
    }).catch(err=>{
        console.log(err)
    })
})

router.post('/LaborApp/PruebaGuardarContratoLaboral',(req,res,next)=>{
    controllers.manejaDatosConflictoLaboral(req.body).then(result=>{
        console.log(result)
        res.send(result)
    }).catch(err=>{
        console.log(err)
        res.send(err)
    })
})

router.post('/LaborApp/PruebaGuardardetalleConflictoDSJC',(req,res,next)=>{
    controllers.manejaDatosConflictoDSJC(req.body).then(result=>{
        console.log(result)
        res.send(result)
    }).catch(err=>{
        res.send(err)
    })
})


router.post('/LaborApp/PruebaGuardarDetalleConflictoNoPagoSalario',(req,res,next)=>{
    controllers.manejaDatosConflictoPagoSalario(req.body).then(result=>{
        console.log(result)
        res.send(result)
    }).catch(err=>{
        res.send(err)
    })
})


router.post('/LaborApp/PruebaGuardarConflictoPagoVacaciones',(req,res,next)=>{
    controllers.manejaDatosConflictoPagoVacaciones(req.body).then(result=>{
        console.log(result)
        res.send(result)
    }).catch(err=>{
        res.send(err)
    })
})


router.post('/LaborApp/PruebaGuardarConflictoPagoCesantias',(req,res,next)=>{
    controllers.manejaDatosConflictoPagoCesantias(req.body).then(result=>{
        console.log(result)
        res.send(result)
    }).catch(err=>{
        res.send(err)
    })
})


router.post('/LaborApp/PruebaGuardarConflictoPrimas',(req,res,next)=>{
    controllers.manejaDatosConflictoPagoPrimas(req.body).then(result=>{
        console.log(result)
        res.send(result)
    }).catch(err=>{
        res.send(err)
    })
})




   
    
 

router.get('/tryEjs', (req,res)=>{
    res.render('firstEjs')
    })

    
    






module.exports=router; 