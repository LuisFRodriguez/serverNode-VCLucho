$(document).ready(function(){
    $("#elementShowData").hide() //oculta elemento con id ="elementShowData"
    $(".card-header").hide()//oculta elemento con class=".card-header"
    $("#btn_getData").click(function(){ //detecta evento click de elemento con id="btn_getData"
    
      fetch('http://localhost:3000/consultarDB')//esto puede cambiar dependiendo
      /** de la ruta en la que se tiene configurado el POST. fetch
       * http://localhost:3000/juanitoDB
   */
  .then(response => response.json())
  .then(data=> { // los datos de la consulta se guardan en la variable data en formatro json
   
    $.each(data, function(i, field){ //cada elemento de la consulta: { Codigo_Persona: 98765, Nombre_Persona: 'ertyu' }
       console.log(field)
       console.log(typeof(field))
    // se guarda en la variable field, por tanto es un objeto de javascript el nombre se obtiene así: field.Nombre_Persona
      $("#elementShowData").show() 
      $(".card-header").show()
      $("#ul-dataItem").append(`<li class='list-group-item' id='itemData'> nombre:${field.Nombre_Persona} -  codigo:${field.Codigo_Persona} </li>`);
      // Con esto lo que se hace es colocarle un hijo al elemento con el id: #ul-dataItem, recordar clases de DOM. 
    }); 
   
  })
  
    });

    //esto remueve las busquedas.
    $("#btn_deleteData").click(function(){
      $(".card-header").hide()
      $(".list-group-item").remove()
   
    


    });

  });

    

  //'http://localhost:3000/consultarDB'



// https://jsonplaceholder.typicode.com/todos/1
  
