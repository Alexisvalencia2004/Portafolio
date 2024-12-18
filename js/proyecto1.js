$(document).ready(function (){
    $('.image').click(function(){
        $(this).toggleClass('selected');
    });

    $('#validate-btn').click(function(){
        let correctSelections=0;
        let incorrectSelections=0;

        $('.image.selected').each(function(){
            if($(this).data('type')==='carro'){
                correctSelections++;
            }
            else{
                incorrectSelections++;
            }
        });
        console.log("Correctas:" + correctSelections);
        console.log("Incorrectas:" + incorrectSelections);

        const totalCarros=$('.image[data-type="carro"]').length;

        if(correctSelections===totalCarros && incorrectSelections===0){
            $('#result').text('¡Correcto! Seleccionaste los carros');
            $('#result').css('color', 'green');
        }else{
            $('#result').text('Incorrecto, selecciona sólo carros');
            $('#result').css('color','red');
        }
    });
});
