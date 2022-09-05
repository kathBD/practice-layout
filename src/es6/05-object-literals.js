//enahced object literals

function newUser(user, age, country, uId){

     return{
        user,
        age,
        country,
        id: uId
     }
    /*return{
        user:user,
        age: age,
        country: country*/
}

console.log(newUser('kayt', 28, 'Sz', 3));