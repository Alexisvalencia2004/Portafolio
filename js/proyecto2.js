$(document).ready(function(){
    /* alert("si funciona"); */
    $('#suma-btn').click(function(){
        const number1= parseFloat($('#number1').val());
        //console.log(number1);
        const number2= parseFloat($('#number2').val());
        //console.log(number2);
        const result= number1 + number2;
        //esto sirve para imprimir el valor por consola
        //console.log(result)

        if(!isNaN(result)){
            $('#output').text(`la suma es: ${result}`);
        }else{
            $('#output').text('Por favor, introduce números válidos')
        }
    });

    $('#resta-btn').click(function(){
        const number1= parseFloat($('#number1').val());
        const number2= parseFloat($('#number2').val());
        const result= number1 - number2;
        
        if(!isNaN(result)){
            $('#output').text(`la resta es: ${result}`);
        }else{
            $('#output').text('Por favor, introduce números válidos')
        }
    });

    $('#multi-btn').click(function(){
        const number1= parseFloat($('#number1').val());
        const number2= parseFloat($('#number2').val());
        const result= number1 * number2;
        
        if(!isNaN(result)){
            $('#output').text(`la multiplicación es: ${result}`);
        }else{
            $('#output').text('Por favor, introduce números válidos')
        }
    });

    $('#divi-btn').click(function(){
        const number1= parseFloat($('#number1').val());
        const number2= parseFloat($('#number2').val());
        const result= number1 / number2;
        
        if(!isNaN(result)){
            $('#output').text(`la división es: ${result}`);
        }else{
            $('#output').text('Por favor, introduce números válidos')
        }
    });
});

