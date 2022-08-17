//console.log('Hello Word')

//crear variables de los selectores

/*const h1 = document.querySelector('h1');
const p = document.querySelector('p') //etiqueta
const p1 = document.querySelector('.p1') //clase
const p2 = document.querySelector('#p2') //id
const input = document.querySelector('input') //id*/

/*console.log({
    h1, p, p1, p2, input
});
//permite cambiar lo que este dentro de esa etiqueta

h1.innerHTML = 'Suspiro';

//h1.innerText convierte a texto

/*console.log(h1.getAttribute('class'))

console.log(h1.setAttribute('class', 'rojo'))*/

/*h1.classList.add('verde');
h1.classList.remove('tema')


input.value= '123';

//crear elementos
//console.log(document.createElement('img'));
*/
const img= document.createElement('img')
img.setAttribute('src', 'https://static.wixstatic.com/media/a63d49_bbc75712834641f7baaac216d456d6d4~mv2.jpg/v1/fill/w_266,h_356,al_c,lg_1,q_80,enc_auto/a63d49_bbc75712834641f7baaac216d456d6d4~mv2.jpg')
console.log(img)

p2.append(img)

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#calcular')
const presult = document.querySelector('#result')

//escuchar elementos

function btnClick(){
  const suma = input1.value + input2.value;
   presult.innerText = 'Resultado: ' + suma
}
