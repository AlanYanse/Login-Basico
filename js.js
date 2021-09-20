<script>

  function enviarFormulario(form){ // Función que se va a ejecutar al enviar el formulario

    event.preventDefault(); // Para evitar envíos no deseados

    var button = document.getElementById("submitButton");
    button.disabled = true;

    google.script.run
    .withSuccessHandler(muestraPagina2)
    .withFailureHandler(muestraError)
    .verificarPassword(form)


  }

  function muestraPagina2(usuario){

      //console.log(usuario.nombre);
      //console.log(usuario.headers);
      //console.log(usuario.ventas);

      var login_page = document.getElementById("login");
      login_page.hidden = true;

      var page_error = document.getElementById("onError");
      page_error.hidden = true;

      var page2 = document.getElementById("pagina2");
      page2.hidden = false;

      var title = "<h2>Bienvenid@ " + usuario.nombre + "</h2></br>";

      var output = title + crearTabla(usuario);

      page2.innerHTML= output;

  }

  function muestraError(error){

      //console.log(error + "hay un error");

      var button = document.getElementById("submitButton");
      button.disabled = false;

      var div = document.getElementById("onError");
      div.hidden = false;

      div.innerHTML = "<font color='red'>" + error + "</font>";
  }

  function crearTabla(usuario){

      var table = "<table class= 'table'><thead class='table-secondary'><tr>";

    for(var columna = 0; columna < usuario.headers.length; columna++){

      table += "<th>" + usuario.headers[columna] + "</th>"; 
    }

    table += "</tr></thead><tr>";

    for(var columna2 = 0; columna2 < usuario.ventas.length; columna2++){

      table += "<td>" + usuario.ventas[columna2] + "</td>";
    }

    table += "</tr></table>";

    return table;

  }


</script>