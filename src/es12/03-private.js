class users {
    //constructor
    constructor (name, age) {
      this.name = name
      this.age = age
    }
  
    //metodos se convierte en privado
    #speak () {
      return 'Hola'
    }
    greating () {
      return `${this.speak()} ${this.name}`
    }
    get #uAge(){
      return this.age;
    }
    set #uAge(n){
      this.age = n;
    }
  }
  
  const tsuki = new users('Juan', 18);
  console.log(tsuki.uAge);
  console.log(tsuki.uAge = 21);