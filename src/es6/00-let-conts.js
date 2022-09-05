//variables declarar

var lastName = 'Tsuki';
//reaccinar
lastName = 'Kath';

console.log(lastName);

//let scope se puede reaccinar
let fruit = 'apple';

fruit = 'orange';
console.log(fruit);

const animal = 'dog';
animal = 'cat';
console.log(animal);


//funtion scope
const fruits =()=>{
    if(true){
        var fruit1 = 'Apple';//funtion scope 
        let fruit2 = 'Kiwi'; // solo dentro del bloque donde son declaradas- block scope-
        const fruit3 = 'orange';// solo dentro del bloque donde son declaradas -block scope-
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
    }
}

fruits();