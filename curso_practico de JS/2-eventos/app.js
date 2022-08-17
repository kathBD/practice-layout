const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#calcular');
const presult = document.querySelector('#result');
const formulario = document.querySelector('#form')




btn.addEventListener('click', btnClick)

//formulario.addEventListener('submit', btnClick)

function btnClick(event){
    //console.log({event})
    //event.preventDefault(); //no recargar pagina
    const suma = parseInt(input1.value) + parseInt(input2.value);
     presult.innerText = 'Resultado: ' + suma
  }
  