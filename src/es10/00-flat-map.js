//flat devuele una array

const array = [1,2,3,4, [1, 2,3,5, [1,2,6]]];

console.log(array.flat(3));

//flatmap transforma la informacion

const array2 = [1,20,3,4,5];
console.log(array2.flatMap(v=> [v,v*2]));