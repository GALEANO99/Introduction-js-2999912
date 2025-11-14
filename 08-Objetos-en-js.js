//  Objetos en JS 

const productName = "Multimetro";
const price = 150;
const available = true;

console.log(productName);
console.log(price);
console.log(available);

const product = {
    productName : "Multimetro",
    price : 150,
    available : true,
}

console.log(typeof product);

// acceder a las propiedades de un objeto

console.log("The product name is : product.productName");
console.log("The price product is : product.price");
console.log("Is the product available? : product.available");

// agregar propiedades al objeto
delete product.price;

console.log(product);

