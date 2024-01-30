let cadena ="Rincón De La Victoria";
let cadena2 = "Málaga";
let cadena3= "   Estepona   ";

document.writeln("<br>",cadena.length); // muestra longitud de la cadeba

document.writeln("<br>",cadena.substring(10)); // muestra a partir d caracter indicado

document.writeln("<br>",cadena.substring(0.10)); // muestra de inicio hasta caracter final indicado

document.writeln("<br>",cadena.substring(-1)); // muestra cadena original

document.writeln("<br>",cadena.charAt(5)); // muestra caracter de esa posición

document.writeln("<br>",cadena.concat(cadena2,cadena3)); // une cadenas, todas las que deseemos
//indexOf - devuelve true: 0 o false: -1
document.writeln("<br>",cadena.indexOf('De')); // devuelve posicion del caracter si encuentra lo indicado
document.writeln("<br>",cadena.indexOf('Vic',3)); // se indica palabra a buscar y desde donde buscar
document.writeln("<br>",cadena.indexOf('de')); // devuelve -1, pq la subcadena no está en la cadena
// replace
document.writeln("<br>",cadena.replace('a',cadena2)); // remplaza lo que se indica por lo nuevo puesto
document.writeln("<br>",cadena.replace(/\s/g, '')); // quita todos espacios en blanco
document.writeln("<br>",cadena.replaceAll(" ", "")); // quita todos espacios en blanco
document.writeln("<br>","1.2.41.1.1.5.6.8.1.1.11.5.1.5.1.1".replaceAll("1", "a")); // reemplaza caracter indicado por el nuevo
//split
document.writeln("<br>",cadena.split('a')); // divide cadena por carecter indicado con una coma
document.writeln("<br>",cadena.split("")); //divide la cadena completamente
// MAYUSCULAS MINUSCULAS
document.writeln("<br>",cadena.toLowerCase()); // todas letras mayusculas se convierte en minusculas
document.writeln("<br>",cadena.toUpperCase()); // todas letras minusculas se convierte en mayusculas
document.writeln("<br>",cadena.substring(0, 10).toLowerCase() + cadena.substring(8).toUpperCase());
// QUITAR y AAÑADIR espacio en blanco
document.writeln("<br>",cadena3.trim); // quita espacios en blanco por delante y detras
//primer parametro tamaño total cadena y luego lo que le queremos añadir que pondrá si entra
document.writeln("<br>",cadena2.padEnd(10,"12345")); // añade lo que le indiquemos al final
document.writeln("<br>",cadena3.padStart(16,"abc")); // añade lo que le indiquemos al inicio
// REPETIR
document.writeln("<br>",cadena3.repeat(3)); // repite caracter o cadena que se le indique
document.writeln("<br>",cadena3+" - Hola".repeat(5));