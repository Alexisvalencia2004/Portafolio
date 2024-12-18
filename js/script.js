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

    