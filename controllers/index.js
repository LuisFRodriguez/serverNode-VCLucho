
const mysql = require ("mysql");
const express = require("express");
const appServer=express();

const con =require("../models/database")
const modelPerson =require("../models/persona/persona_model")
const path = require("path");
const static =require ("static");
const  handleDates   = require("../funcionalidades/manejoFechas/manejoFechas");
let handleDatesX = handleDates.HandleDate;





const sendFiles=require("../main") 

const  getData=(req,res,next)=>{
    res.send("HolaDesdeControlador")    
}





const sirveJson=(req,res,next)=>{
    res.json([{
       
        "Codigo_Persona":"Cod123456",
        "Nombre":"Stiven Rojas",
        "Telefono":311234545,
        "Usuario":"Useradmin",
        "Password":"Pass123"
    },{
        "Codigo_Persona":"Cod00202",
        "Nombre":"Luis Rodriguez",
        "Telefono":311234545,
        "Usuario":"Useradmin2",
        "Password":"Pass123"

    }])
}



const dataPet=(req,res,next)=>{
    
  
    }


    const consultaData = async()=>{
       let resultConsultPerson=await modelPerson.consultPersonDB();
       return resultConsultPerson;

    }

const contrInsertDataPer = async(Codigo_Persona,Nombre,Telefono,Usuario,Password)=>{
     let resultInsertPerson=await modelPerson.insertPersonDB(Codigo_Persona,Nombre,Telefono,Usuario,Password);
     return resultInsertPerson;

}

const manejaDatosConflictoLaboral = (DataContratoLaboral) =>{
    return new Promise((resolve,reject)=>{
        if(DataContratoLaboral!=undefined){
            //console.log(DataContratoLaboral.fechaInicioContrato)
             
            
            let handleDates1 = new handleDatesX(DataContratoLaboral.fechaInicioContrato);
            handleDates1.ToChangeFormatDate();
            resolve(handleDates1.ToChangeFormatDate());

        }else{
            reject("**problem**")
        }
    })
}

const manejaDatosConflictoDSJC= (DataContratoDSJC) =>{
    return new Promise((resolve,reject)=>{
        if(DataContratoDSJC!=undefined){
            
            resolve(DataContratoDSJC)

        }else{
            reject("**problem**")
        }
    })
}

const manejaDatosConflictoPagoSalario= (DataContratoPagoSalario) =>{
    return new Promise((resolve,reject)=>{
        if(DataContratoPagoSalario!=undefined){
            
            resolve(DataContratoPagoSalario)

        }else{
            reject("**problem**")
        }
    })
}

const manejaDatosConflictoPagoVacaciones= (DataContratoPagoVacaciones) =>{
    return new Promise((resolve,reject)=>{
        if(DataContratoPagoVacaciones!=undefined){
            
            resolve(DataContratoPagoVacaciones)

        }else{
            reject("**problem**")
        }
    })
}




const manejaDatosConflictoPagoCesantias= (DataContratoPagoCesantias) =>{
    return new Promise((resolve,reject)=>{
        if(DataContratoPagoCesantias!=undefined){
            
            resolve(DataContratoPagoCesantias)

        }else{
            reject("**problem**")
        }
    })
}

const manejaDatosConflictoPagoPrimas= (DataContratoPagoPrimas) =>{
    return new Promise((resolve,reject)=>{
        if(DataContratoPagoPrimas!=undefined){
            
            resolve(DataContratoPagoPrimas)

        }else{
            reject("**problem**")
        }
    })
}








   


module.exports={
    getData,
    dataPet,
    consultaData,
    sirveJson,
    contrInsertDataPer,
    manejaDatosConflictoLaboral,
    manejaDatosConflictoDSJC,
    manejaDatosConflictoPagoSalario,
    manejaDatosConflictoPagoVacaciones,
    manejaDatosConflictoPagoCesantias,
    manejaDatosConflictoPagoPrimas
}