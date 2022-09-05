const regex = /\b(Apple)+\b/g; //filtrar una palabra

const fruit = 'Apple, Bananna, Kiwi, Orange, Apple';

for(const match of fruit.matchAll(regex)){
    console.log(match);
}