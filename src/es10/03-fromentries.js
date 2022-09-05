
const entries = new Map([["name", 'kat'], ["age", 35]]);
console.log(entries);

console.log(Object.fromEntries(entries));

const entries2 = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
  const obj = Object.fromEntries(entries2);
  
  console.log(obj);
  // expected output: Object { foo: "bar", baz: 42 }
  