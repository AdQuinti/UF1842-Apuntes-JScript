/** atajaso referentes solo a JavaScript */

/** si nos vamos a consola de nuestro navegador edge o chrome y 
 * escribimos esto, nos sale propiedad que tiene todos nuestros objetos
 * en javascript-> "constructor"
 * 
 * let objeto = {};
 * objeto.constructor // nos sale f Object(){[native code]}
 * 
 * Esto quiere decir que podemos crear un objeto cn su propio constructor
 * let objeto2 = new Object();
 * objeto2.constructor // nos sale f Object(){[native code]}
 * 
 */
// se puede crear objeto así o llamando al constructor
let obj = {}; // atajo llamada constructor objeto
let obj2 = new Object();

/** CONSTRUCOTRES QUE EXISTEN EN JavaScript
 * new Object(); 
 * new Array(); // creará un array con []
 * new Stirng(); // creará string con "" '' ó bastig ``
 * new Number(); // creará número: 1 2 343 23243
 * new Boolean(); // creará true ó false
 */

// Objeto que tendrá si lo creamos con una función constructora
function Usuario() {
    this.name = "Nico";
}
let user = new Usuario();
console.log(user.constructor);
// nos devuelve el código, eso no pasa con los otros constructores

/** si en consola del explorer consultamos pro el tipo en un string
 * typeof "" // nos devuelve 'string'
 * -> pero si lo hacemos por su contructor nos devuelve object
 * typeof new String() // devuelve 'object'
 * -> Ocurre con todos los constructores,y es debido pq al momento
 * de acceder a sus métodos, jScript lo envuelve en un objeto y tras
 * pasar a siguiente linea de ejecución lo saca de ese objeto.
 */

/* PRECAUCIÓN los string, numbers y booleans creado con el constructor 
se comportan de distinta manera que los normales. Ejemplo de posible fallo: */

const s1 = "1+1";
const s2 = new String("1+1");
// si imprimimos valores en termianl navegador veremos:
console.log(s1,s2);
// uno si nos devuelve el String y el otró el código
// si lo envolvemos para ver que pasaría si seguimos trabajando con ellos
console.log(eval(s1),eval(s2)); 
/** vemos más claramente que el que se creo con constructor nos lo
 * deja igual que él código. Encapsulado y sin mostrarlo como un String.
 */
//mostrar objeto cn su valor literal
console.log(s2.valueOf());
// valeOf() -> se puede utilizar para String(),Number() y Booleans()
