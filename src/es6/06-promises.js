
const anotherFuction =()=>{
    return new Promise((resolve, reject)=>{

    if(true){
        resolve('Hola logramos resolver');
    }else{
        reject('No funciono');
    }
    
    })
}

anotherFuction()
   .then(response=>console.log(response))
   .catch(err=>console.log(err));