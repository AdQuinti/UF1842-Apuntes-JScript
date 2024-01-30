document.writeln("WHILE"+"<br>");
console.log("Bucle While"); // BUCLE WHILE
var result = 3;
while (result <= 500){
    //result = 3 * result;
    result *= 3;
    document.writeln(result+"<br>");
}

document.writeln("<br>"+"\nDO WHILE"+"<br>");
console.log("Bucle Do While"); // BUCLE DO WHILE
let i = 1;
do {
    document.writeln('El valor de i es: ', i+"<br>");
    i++;
} while (i <= 5);

document.writeln("<br>"+"\nFOR"+"<br>");
console.log("Bucle for"); // BUCLE FOR
for (let i = 0; i < 5; i++) {
    document.writeln("Iteración número: " + i+"<br>");
}

document.writeln("<br>"+"\nFOR EACH"+"<br>");
console.log("Bucle For Each"); // BUCLE FOR EACH
const frutas = ["manzana", "banana", "cereza"];
frutas.forEach(function(fruta) {
    document.writeln(fruta+"<br>");
    }
);

document.writeln("<br>"+"\nFOR...IN"+"<br>");
console.log("Bucle for...in"); 
// BUCLE FOR...IN - recorre todas las propiedades enumerables de un objeto
let obj = {a: 1, b: 2, c: 3};
for (let prop in obj) {
    document.writeln("Propiedad: " + prop + ", Valor: " + obj[prop]+"<br>");
}

document.writeln("<br>"+"\nFOR...OF"+"<br>");
console.log("Bucle for...of");
// BUCLE FOR...OF - recorre las propiedades de objetos iterables (como arrays, strings, maps, sets, etc.).
let arr = ['a', 'b', 'c'];
for (let value of arr) {
    document.writeln("Valor: " + value+"<br>");
}