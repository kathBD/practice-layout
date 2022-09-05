
//puede ser usado en objetos

const user = {username: 'Mará', email: 'mara@user.com', age: 35, country: 'CL'};

const{username, ...values} = user;

console.log(username);
console.log(values);