// como utilizar constructor Function
// METODO CALL -> nos sirve para extender objetos y funciones
// así podremos reutilizar código repasando una función a otro objeto, etc
// y esta se encargará de extenderlo.

function Punto(x,y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...');}
}

// para que NO nos arroje un fallo o valor nulo ya que no retorna nada, la funcion, será así
let punto = { z: 7 }; // z es una coordenada asignada a un valor 7
Punto.call(punto, 1, 2); // punto reemplazo el valor de this en la función
// Método call - no así:
//Punto.call({},1, 2);
// primer argumento es el contexto de this y luego indicamos argumentos
// a la cual lo llamamos.

//Punto.apply(punto, [1, 2]); // hace lo mismo solo que le pasamos argumentos como un array
console.log(punto);

// como utilizar constructor Function - NO SE UTILIZA -
// creamos variable y le asignamos el contrcutor de funciones
/* const Point = new Function('x','y',`
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log('Dibujando...'); }
`);

const p = new Point(1,2);
console.log(p); */

/**
 * Se puede crear funciones con el consturctor pero hay que evitarlo
 * Exiten propiedades del constructor como call y apply que nos sirve
 * para extender el objeto y reutilizarlo con otro metodo ya creado antes
 */