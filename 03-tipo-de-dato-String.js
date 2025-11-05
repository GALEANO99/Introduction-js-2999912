//  String o cadena de texto 
const  userName = "Carlos";
const userName1 = 'Brahia';

console.log(typeof(userName));


//Dos formas no tan comunes de crear Strings
const userName2 = String("Yessica");



//Creamos una variable (objeto) mediante el constructor instanciando a partir de la palabra new.
// Instancias, es el proceso mediante el cual yo creo un objeto a partir de una clase
const userName3 = new String("Yessica");

console.log(userName2)
console.log(userName3)


let product = "Televisor de 50";
console.log(product);

let product2 = "Televisor de 50\"";
console.log(product2);

let phrase = "Estamos aprendiendo JS en el CDITI"
console.log(phrase.length);

// Busca si una cadena existe y me da su indexacion
// Si el resultado es menor que cero, la cadena No existe
console.log(phrase.indexOf("Js"));

// Metodo mas moderno para buscar su ya cadena de existe dentro del texto 
console.log(phrase.includes("JS"));
