
async function* generador(){
    yield await  Promise.resolve(1);
    yield await  Promise.resolve(2);
    yield await  Promise.resolve(3);
    
}

const other = generador();
other.next().then(Response =>console.error(Response.value));
other.next().then(Response =>console.error(Response.value));
other.next().then(Response =>console.error(Response.value));
console.log('Hola');

async function arrayNames(array){
    for await (let value of array){
        console.log(value);
    }
}

const names = arrayNames(['Juan', 'Pedro', 'Tsuki']);
console.log('Antes')