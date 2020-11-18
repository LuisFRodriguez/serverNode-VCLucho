const databaseData =require("./keys");
const mysql =require("mysql");

const con = mysql.createConnection(databaseData);


let = connectingDB=()=>{
    return new Promise ((resolve,reject)=>{
        con.connect((err) => {
            if (err) reject ("**problemas con la conexión a la base de datos**");
            resolve (`Connected to database in ${databaseData.host}, name:${databaseData.database}`);
          });
       
    });
    }

let = applyConnectDB=async()=>{
    let resul= await connectingDB();
   return ` ${resul}`
}


applyConnectDB().then(result=>{
    console.log(result)
}).catch(error=>{
    console.log(error)
})
   
 

module.exports=con;
