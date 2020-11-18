
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
        var nombre=document.getElementById("nombre").value
        var key=document.getElementById("key").value
        $.post( "http://localhost:3000/tryPost", {Nombre_Persona: nombre, Codigo_Persona: key } );
      });
  });
  
  var inicioParqueo = new Date();
  
  console.log(inicioParqueo)
  
      