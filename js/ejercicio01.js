// Comentario de una sola linea
/* Comentario
   multilinea
*/

// Ejercicio 01: Declaración de variables en JavaScript
// 1. Utilizando la palabra reservada VAR

console.warn("-- Declaracion de Variables utilizando prefijo VAR --");

var miNombre = "Aylin";
console.log("El valor almacenado en la variable miNombre es:", miNombre);

// Modificar el valor de la variable
miNombre = "Aylin";
console.log("El valor almacenado en la variable miNombre es:", miNombre);

var misApellidos = "";
console.log("El valor almacenado en la variable misApellidos es:", misApellidos);

// 2. Utilizando CONST
console.warn("-- Declaracion de Variables utilizando prefijo CONST --");

const miMatricula = "240853";
console.log("El valor de la constante miMatricula es:", miMatricula);

// 3. Uso de LET y funciones

var fechaNacimiento = new Date("2006-06-08");
var miEdad = calcularEdad(fechaNacimiento);
console.log("Tu edad es de:", miEdad, "años.");

// Verificamos si es mayor de edad
let esMayorDeEdad = miEdad >= 18;

if (esMayorDeEdad) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Función para calcular la edad
function calcularEdad(fechaNacimiento) {

    let fechaHoy = new Date();
    let milisegundosPorDia = 24 * 60 * 60 * 1000;

    let diasVividos = (fechaHoy - fechaNacimiento) / milisegundosPorDia;

    let edad = diasVividos / 365.25;
    edad = Math.floor(edad);

    return edad;
}

// Interpolación de datos
misApellidos = "Esteban Luna";
console.log(`Hola, ${miNombre} ${misApellidos}, actualmente tienes ${miEdad} años.`);

// Autor: Aylin Esteban Luna
