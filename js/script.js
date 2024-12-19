 $(document).ready(function(){
    //verifica que jQueri esta funcionado
    console.log("el Dom esta listo");

    //funcion para mostrar uno de los tres proyectos 
    function mostrarProyecto (idProyecto){
        console.log("Mostrar Proyecto", idProyecto)
        $("article").hide();
        $(idProyecto).fadeIn();
       
    }

    //funcion para ocultar alguno de los proyectos 
    function OcultarProyecto(){
         $("article").fadeOut();

    }

    //eventos para los cuatros botones 
    $("#mostrar-1").click(function(){
        mostrarProyecto("#Project-1")
        console.log("mostrar proyecto1")
        
    });

    $("#mostrar-2").click(function(){
        mostrarProyecto("#Project-2")
        console.log("mostrar proyecto2")
    });
    
    $("#mostrar-3").click(function(){
        mostrarProyecto("#Project-3")
        console.log("mostrar proyeco3")
    });
    
    $("#ocultar-todos").click(function(){
        console.log("ocultar todos")
        OcultarProyecto("article");
    });
    
});

$(document).ready(function () {
    $("#contactForm").on("submit", function (e) {
      e.preventDefault(); // Evita el envío predeterminado del formulario
  
      // Obtener los valores del formulario
      const name = $("#name").val();
      const email = $("#email").val();
      const message = $("#message").val();
  
      // Verificar que los campos no estén vacíos
      if (name === ""|| email === "" || message === "") {
        $("#statusMessage").text("Por favor, completa todos los campos.").css("color", "red");
        return;
      }
  
      // Enviar datos a través de EmailJS
      emailjs.send("service_tricxxl", "template_ljstwds", {
        name: name,
        email: email,
        message: message,
      })
      .then(function (response) {
        $("#statusMessage").text("Mensaje enviado con éxito.").css("color", "green");
        $("#contactForm")[0].reset(); // Limpiar el formulario
      })
      .catch(function (error) {
        console.error("Error:", error);
        $("#statusMessage").text("Ocurrió un error. Intenta de nuevo.").css("color", "red");
      });
    });
  });