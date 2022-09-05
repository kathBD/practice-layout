//declarar clase

class user {
  //metodos
  greeating () {
    return 'Hello user'
  }
}

const user1 = new user()

console.log(user1.greeating())

const loper = new user()
console.log(loper.greeating())

//constructor inicializa los elementos

class user {
  constructor () {
    console.log('Nuevo Usuario')
  }
  greating () {
    return 'Hello user'
  }
}

const Pedro = new user()

//referencia this elemento padre que lo contiene

class User {
  constructor (name) {
    this.name = name
  }
  //metodos
  speak () {
    return 'Hello'
  }
  greating () {
    return `${this.speak()} ${this.name}`
  }
}

const raquel = new User('Raquel')
console.log(raquel.greating())

//instancia de un objeto

//const newUser = new User();

//setters and getters

class users {
  //constructor
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  //metodos
  speak () {
    return 'Hola'
  }
  greating () {
    return `${this.speak()} ${this.name}`
  }
  get uAge(){
    return this.age;
  }
  set uAge(n){
    this.age = n;
  }
}

const tsuki = new users('Juan', 18);
console.log(tsuki.uAge);
console.log(tsuki.uAge = 21);