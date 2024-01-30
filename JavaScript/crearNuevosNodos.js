//Crear nuevos nodos
/**Para crear un nuevo nodo en nuestro documento HTML, 
 * en este caso queremos crear un párrafo, 
 * debemos hacer dos pasos: 
 * 1. Crear el nodo
 * 2.Añadirlo el elemento
 * Para esto, tendremos en cuenta el nodo-padre(la etiqueta<div>) */
//1.creamos el nodo:
const parrafo4 = document.createElement('p');
//añadimos contenido al parrafo
const textParrafo4 = document.createTextNode('Párrafo 4');
//2.añadimos el nodo
//para esto debemos seleccionar el nodo padre:
const elementoPadre = document.querySelector('.padre');
//añadimos el nodo
elementoPadre.appendChild(parrafo4);
//añadimos el texto a su nodo padre (el párrafo 4), tenemos dos formas:
parrafo4.appendChild(textParrafo4);
//parrafo4.innerHTML = '<h1>Párrafo 4</h1>'; 

//añadir elementos con append, puedo añadir varios nodos a la vez
const parrafo5 = document.createElement('p');
const parrafo6 = document.createElement('p');
elementoPadre.append(parrafo5,parrafo6);
parrafo5.innerHTML = 'Párrafo 5';
parrafo6.innerHTML = 'Párrafo 6';


