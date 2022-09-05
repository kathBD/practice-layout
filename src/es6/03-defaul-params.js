

function newUser(name, age, country){

    var name = name || 'Kath';
    var age = age || 34;
    var country = country || 'Co';

    console.log(name, age, country);

}

newUser();
newUser('Lucas', 20, 'Vz');

//nueva forma

function newAdmin(name = 'kathe', age = 28, country = 'usa'){
    console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 52, 'CL');