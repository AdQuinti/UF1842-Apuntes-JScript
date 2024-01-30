/* querySelector -> coge una clase
querySelectorAll -> coge todos */
// creacion variables
//let elementoPorId = document.getElementById('parrafo1'); // EN DESHUSO
let elementoPorId = document.querySelector('#parrafo1'); // hay que indicar # o . si es id o class

elementoPorId.innerHTML = '¡Buenos días!';
console.log('Modificado parrafo1');

//nombre de class
/* let elementoPorClase = document.getElementsByClassName('parrafo'); // EN DESHUSO
// coge tres elementos creados html y crea array automaticamente
console.log('Creado Array ',elementoPorClase.length,' elementos'); */
let elementoPorClase = document.querySelectorAll('.parrafo'); // hay que indicar # o . si es id o class
console.log(elementoPorClase);
const arrayClase = [...elementoPorClase];
console.log(arrayClase);
arrayClase[1].innerHTML = 'olaquease';

// CODIGO EN DESHUSO
/* // selecion segundo elemento del array y cambiamo contenido
elementoPorClase[1].innerHTML = 'hola';
console.log('Modificado parrafo1');*/

let elementoPorTag = document.querySelectorAll('p');
elementoPorTag[2].innerHTML = 'hastamañana';
/*// CODIGO EN DESHUSO
// por su etiqueta
let elementoPorTag = document.getElementsByTagName('p');
//cambiamos valor contenido
elementoPorTag[2].innerHTML = 'adios';  
console.log('Modificado parrafo2'); */



// CAMBIAMOS ESTILO A LOS PARRAFOS1  solo
// Background
elementoPorId.style.background = 'gray';
// letra color
elementoPorId.style.color = 'white';
// redondea bordes barckground
elementoPorId.style.borderRadius = '8px';
// longitud(ancho)
elementoPorId.style.width = '100px';
// texto centrado
elementoPorId.style.textAlign = 'center';

