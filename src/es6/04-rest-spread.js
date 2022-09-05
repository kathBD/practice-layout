//array y objetos

//1-array destructuring

let fruit = ['Apple', 'Banana'];

let [a, b] = fruit;

console.log(a,b);
console.log(a,fruit[1]);

//2-objet destructuring

let user ={username: 'Luis', age: 28};

let{username, age} = user;
console.log(username, age);

//otra
console.log(username, user.age);

//spread operator

let person ={name: 'Jhon', age: 45};
let country ='MX';

//let data = {...person, country};
let data = {id: 1, ...person, country};
console.log(data)

//parametros rest

function sum(num, ...values){
   console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}


console.log(sum(1, 1, 2, 3))