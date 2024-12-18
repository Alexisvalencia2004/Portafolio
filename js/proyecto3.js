 //IMC = Peso / (altura*altura)
 document.querySelector('#imc-form').addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector('#name').value;
    const altura = parseFloat(document.querySelector('#heigth').value);
    const peso = parseFloat(document.querySelector('#weight').value);
    const IMC = peso / (altura * altura);
    console.log(IMC);

    const p = document.createElement('p');
    p.className = `p-clase`;
    p.appendChild(document.createTextNode(`${nombre}, su indice de masa corporal (IMC) es: ${IMC.toFixed(2)}`));
    const resultado = document.querySelector('#result');
    
    resultado.innerHTML = ''; // Limpia el contenido del contenedor
    resultado.appendChild(p); // Agrega el elemento p al contenedor
    setTimeout(()=>document.querySelector('.p-clase').remove(), 10000);
  });