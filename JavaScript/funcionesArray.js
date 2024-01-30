/**
 * https://lenguajejs.com/javascript/arrays/array-functions/
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
 */

// DEFINIMOS ARRAY
const frutas = ['manzana', 'pera']; // es constanate - se le puede añadir pero no reducir num elementos

// push -> AÑADE UN ELEMENTO a última posición
document.write('PUSH<br>');
frutas.push('naranja');
document.write(frutas); // resultado: ['manzana' , 'pera' , 'naranja']
document.write('<br><br>'); // SALTO LINEA

// pop -> QUITA ELEMENTO FINAL
document.write('POP ()<br>');
const frutas1 = ['manzana' , 'pera' , 'naranja'];
const ultimaFruta = frutas1.pop();
document.write(ultimaFruta); // resultado: 'naranja'
document.write('<br>'); // SALTO LINEA
document.write(frutas1);
document.write('<br><br>'); // SALTO LINEA

// unshift(elemento) -> AÑADE elemnto array, al principio
document.write('unshift<br>');
const frutas2 = ['manzana', 'pera'];
frutas2.unshift('fresa');
document.write(frutas2); // resultado: ['fresa', 'manzana', 'pera']
document.write('<br><br>'); // SALTO LINEA

// shift() -> QUITA primer elemento
document.write('shift()<br>');
const frutas3 = ['fresa', 'manzana', 'pera'];
const primeraFruta = frutas3.shift();
document.write(primeraFruta); //resultado: 'fresa'
document.write('<br>'); // SALTO LINEA
document.write(frutas3); // resultado: ['manzana', 'pera']
document.write('<br><br>'); // SALTO LINEA

// concat(arr1, arr2, ..., arrN) -> UNIMOS dos array
document.write('concat(arr1, arr2, ..., arrN)<br>');
const frutas4 = ['manzana', 'pera'];
const frutas5 = ['fresa', 'uva'];
const frutasConcatenadas = frutas4.concat(frutas5);
document.write(frutasConcatenadas); // resultado: ['manzana', 'pera', 'fresa', 'uva'];
document.write('<br><br>'); // SALTO LINEA

/// slice(inicio, fin) -> QUITA rango elementos que indiquemos, según posiciones
document.write('slice(inicio, fin)<br>');
const frutas6 = ['manzana', 'pera', 'fresa', 'uva'];
const frutasSlice = frutas6.slice(1,3);
document.write(frutasSlice); // resultado: ['pera', 'fresa']
document.write('<br><br>'); // SALTO LINEA

//splice(inicio, cantidad, elemento1, elemento2, ..., elementoN) -> SOBREESCRIBE posicion que se indique
document.write('splice(inicio, cantidad, elemento1, elemento2, ..., elementoN)<br>');
const frutas7 = ['manzana', 'pera', 'fresa', 'uva'];
frutas7.splice(1, 2, 'kiwi', 'mango');
document.write(frutas7); // resultado: ['manzana', 'kiwi', 'mango', 'uva']
document.write('<br><br>'); // SALTO LINEA

//indexOf(elemento) -> MUESTRA POSICION según elemento del array que pongamos
document.write('indexOf(elemento)<br>');
const frutas8 = ['manzana', 'kiwi', 'mango', 'uva'];
const indiceMango = frutas8.indexOf('mango');
document.write(indiceMango); // resultado: 2
document.write('<br><br>'); // SALTO LINEA

// includes(elemento) -> INDICA si existe o no elemento en array
document.write('includes(elemento)<br>');
const frutas9 = ['manzana', 'kiwi', 'mango', 'uva'];
const tieneMango = frutas9.includes('mango');
document.write(tieneMango); // resultado: true
document.write('<br><br>'); // SALTO LINEA

// filter
// map
// forEach
// reduce(callback)






