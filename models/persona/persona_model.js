
class Persona{
    constructor(Codigo,Nombre, Telefono, Usuario, Password){
    
       this.Codigo=Codigo; 
       this.Nombre=Nombre;
       this.Telefono=Telefono;
       this.Usuario=Usuario;
       this.Password=Password;
       
    }


    getCodigo(){
        return (this.Codigo);

    }

    setCodigo(codigo){
        this.Codigo=codigo;
    }



    getNombre(){
        return (this.Nombre);

    }

    setNombre(nombre){
        this.Nombre=nombre;

    }

    getTelefono(){
        return (this.Telefono);

    }

    setTelefono(telefono){
        this.Telefono=telefono;
    }

    getUsuario(){
        return (this.Usuario);

    }

    setUsuario(usuario){
        this.Usuario=usuario;
    }

    getPassword(){
        return (this.Password);

    }

    setPassword(password){
        this.Password=password;
    }


}



const personaDataBase= new Persona("Cod001","Stiven Rojas",3122887654,"Stiven","Pass123");


const con =require("../database")
const mysql = require ("mysql");

let insertPersonDB=(codigoPersona,nombre,telefono,usuario,password)=>{
   return new Promise ((resolve,reject)=>{
       var sql = "INSERT INTO Personas (Codigo_Persona,Nombre,Telefono,Usuario,Password) VALUES ('" + codigoPersona + "', '" +  nombre + "', '" +  telefono + "','" +  usuario + "','" +  password + "')";
       con.query(sql, (err)=> {
           if (err){reject(`you was a problem **Codigo:${codigoPersona}- Nombre:${codigoPersona}- Telefono:${telefono}- Usuario:${usuario}- Password:${password}**`);}
           resolve(`****The data: Codigo:${codigoPersona}- Nombre:${nombre}- Telefono:${telefono}- Usuario:${usuario}- Password:${password},  was inserted ****`);
       
     });
     
    })

}


let deletePersonDB=(codigoPersona)=>{

}

let consultPersonDB=()=>{
    return new Promise((resolve,reject)=>{
    con.query("SELECT * FROM Personas", function (err, result, fields) {
        if (err) {reject("you was a problem with the consult")}
        resolve (result)
      });
    })
}



module.exports={
    insertPersonDB,
    deletePersonDB,
    consultPersonDB
    
}




