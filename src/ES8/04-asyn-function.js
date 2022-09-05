const fnAsyn = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("AsynC!!!"), 2000)
      : reject(new Error("Error"));
  });
}

const anoherFn = async()=>{
  const somenting = await fnAsyn();
  console.log(somenting);
  console.log('Hola');
}

console.log('antes')
anoherFn();
console.log('despues')