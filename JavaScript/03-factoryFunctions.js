/** 
 * FACTORY FUNCTIONS -> permite crear objetos de forma
 * sencilla pero no repetitiva.
 * pr convención utilizan CamelCase en su nombre y 
 * debe comenzar con create o crear 
 * Tambien puede recibir parametros de todo o parte*/

function createUser (name, email) { 
    return {
        // id: 1, // quitamos id
        email, // Forma corta ó así email: email, - o asignado ya -> 'nico@hotmail.com'
        name,
        activo: true,
        recuerarClave: function () { // función ANONIMA
            console.log('Recuperando clave...');
        },
    };
}

// mandamos parametros
let user1 = createUser('Nicolas','nico@hotmail.com');
let user2 = createUser('Felipe','fili@gmail.com'); // para crear más user solo hay que repetir linea

//Crea dos objetos
console.log(user1,user2);
// para verlo en web así
let usuario1String = JSON.stringify(user1); //JSON.stringify para convertir objetos en cadena texto
let usuario2String = JSON.stringify(user2);
document.write(usuario1String + "<br>");
document.write(usuario2String + "<br>");
