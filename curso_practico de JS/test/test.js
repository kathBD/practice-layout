
/***************1**********************************/
/********************************************** */


// 1-variables espacio en memoria donde se puede guardar información dependiendo del lenguaje y su estructura

//declara, let permite cambiar el valor const no permite

let nombre;
nombre = 'kath'; //inicializar asignar un valor


//- ¿Cuál es la diferencia entre sumar números y concatenar strings?
let suma  = 2 + 2;
console.log(suma);
let sumaString = 'Hola, ' + 'Tsu';
console.log(sumaString);

//- ¿Cuál operador me permite sumar o concatenar?*/

//el operador es + para numeros suma para string concatena


/***************2*********************************/
/********************************************** */

let nombre2, Apellido, nombreUsuarioPlatzi, correoElectronico; //String
let esMayorDeEdad = true; //boolean
let dineroAhorrado = 1000000000; //number

//Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:


let deudas = 20000;


let nombreCompleto = 'Kath Bonilla';
let dineroReal = dineroAhorrado - deudas;
console.log(nombreCompleto + ' su dinero total es: ' + dineroReal);

//## Funciones

//encapsulan bloques de codigo (guardar) entre llaves  que pueden llamarse para ser reutilizable, cuando tenermos bloques de codigo muy parecidos 

function nombre3(name, lastname)
{
    return name + '' + lastname;
}


nombre3('tsuki', 'Lopez')

console.log(nombre3('tsuki ', 'Lopez'))

//parametros cuando defines las creamos reciben en una funcion lo que esta en parentesis mientas los argumentos es cuando se ejecutan
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

//Solution
const myFunction = (name, lastName, nickName) =>  `Mi nombre es:  ${name} ${lastName}, pero prefiero que me digas ${nickName}.`;

console.log(myFunction("Herald ", "Flores", "herald"));

//condicional?
//If(else else if) switch
//permite hacer validadiones en cada vareiacion
/*n condicional es una sentencia… es una pregunta que lanzamos y espera un SI o un NO… un True o False. Dependiendo de la respuesta hacemos una cosa u otra

Pero… ¿como es esa pregunta que espera el condicional?

Normalmente son comparaciones de las variables:

: mayor que
< : menor que
== : igual que
!= : diferente de*/

//ciclo
//while, do while, for. 


//funcion con promt

while(respuesta !=4){

let respuesta = prompt('cuánto es 2 + 2')



}

//array

num = [1, 2, 3]

