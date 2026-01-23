//  Comentario de una sola línea 

/*  Comentarios 
    ...
    multilínea
*/

// Personalizacióin de salidas a Consola
const bg= "linear-gradient(45deg, rgba(52, 152, 219, 1) 0%, rgba(26, 188, 156, 1) 50%)";
const style_console = `background: ${bg}; color:white; border-radius: 6px; padding:4px; font-size:1.0rem; font-weight:bold`

// EJERCICIO 01: Declaración de Variables en JavaScript
// 1. Utilizando la palabra reservada VAR
console.log("%cEjercicio 01: Declaración de Variables ",style_console);
// Utilizaremos el métdodo WARN para estilizar las respuestas de las pruebas realizadas a nuestro código, y facilitar su revisión

console.warn("-- Declaración de Variables utilizando el prefijo VAR --")

var miNombre = "Aylin L.";
console.log("El valor almacenado en la variable miNombres es: ",miNombre);

//Modificar el valor de la variable
miNombre = "Aylin Luna";
console.log("El nuevo valor de la variable miNombre es: ",miNombre);

var misApellidos; 
console.log("El valor almacenado en la variable miApellido es: ",misApellidos); //undefined
// Una variable puede cambiar su valor durante la ejecución del programa
 

console.warn("-- Declaración de una Constante utilizando el prefijo CONST --")
// 2. Utilizando la palabra reservada CONST
// Una constante a diferencia de una variable es que su valor no cambiará durante toda la ejecución del programa, y al momento de ser declarada esta deberá se inicializada obligatoriamente.

const miMatricula = "240853";
console.log("El valor de la constante miMatricula es: ", miMatricula);

// Intentando modificar el valor de la constante

/*miMatricula = "25XXXX";
console.log("El valor de la constante miMatricula es: ", miMatricula);*/


// 3. Utilizando la palabra reservada LET
// LET es el prefijo utilizado muy similar a VAR con la diferencia en su alcance (SCOPE), aquellas declaradas con VAR tienen un alcance globlal en el código no importando bloques o secciones, mientras que las variables declaradas con let solo existiran dentro del bloque o función.
console.warn("-- Declaración de una Constante utilizando el prefijo LET --")
var fechaNacimiento = new Date("2006-06-08");
var miEdad = calcularEdad(fechaNacimiento);
console.log("Tu edad es de: ",miEdad, " años.");

// Verificamos si es mayor de edad
if(miEdad >=18)
{
    var esMayorDeEdad = true
    let esMenorDeEdad = false;
}

if(esMayorDeEdad)
console.log("Eres mayor de edad.");
else 
console.log("Eres menor de edad.");

/*console.log("El valor de esMenorDeEdad es :", esMenorDeEdad);*/
// La variable booleana no puede persistir por el tipo de declaración con LET, solo fue de alcanze local mientras el condicional (if) se ejecuto.


function calcularEdad(fechaNacimiento)
{
    //Para calcular la edad requerimos de la fecha del día de hoy
    var fechaHoy = new Date();

    // Dado que los datos de fecha son almacenados en milisegundos por default en JavaScrip, necesitamos una variable que nos permite saber el numero de milisegundos por día
    let milisegundosPorDia = 24*60*60*1000;

    //Ya que tenemos los miliseguntos por día tenemo que restar a la fecha de hoy, la fecha en que nacimos para calcular los milisegundos que hemos vivido.
    let diasVividos = (fechaHoy - fechaNacimiento)/milisegundosPorDia;

    // invocamos el método matemático de la función piso (FLOOR)
     var edad = diasVividos /365.25
     edad = Math.floor(edad);

     return edad;

}

// Interpolación de Datos
// $ {}  `
misApellidos="Esteban Luna";
console.log(`Hola, ${miNombre} ${misApellidos} actualmente tienes ${miEdad} años.`);

// Autor: Aylin Esteban Luna
