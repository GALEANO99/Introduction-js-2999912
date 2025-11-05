const boolean1 = true;
const boolean2 = false;

console.log(typeof boolean1);
console.log(typeof boolean2);


//comprobar edad
let age = 17
let older = age >= 18;

console.log(older);


//Comprobar cadena vacia
const userName = "";
const haveName = userName != "";
console.log(haveName);


//todos los valores distintos de sero son true truthy
console.log(Boolean(0)); // false
console.log(Boolean(10)); //true
console.log(Boolean(-10)); //true
console.log(Boolean(1)); //true

let nullValue = null;
let undefinedValue;

console.log(Boolean(nullValue));
console.log(Boolean(undefinedValue))