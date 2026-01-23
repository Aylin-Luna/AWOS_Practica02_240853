//Comentario de una sola linea
/*Comentario
  ...
  Multitarea
  */
 //Ejercicio 01:    Declaracion de variables en JavaScript
 //1. Utilizando la palabra reservada VAR

 //Utilizaremos el metodo WARM para estilizar las respuestas en las pruebas realizadas a nuedtro 
 //codigo, y facilitar su revicion

console.warn("-- Declaracion de Variables utilizando prefijo VAR --")

var miNombre = "Aylin";
console.log("El valor almacenado en la variable miNombre es: ",miNombre);

//Modificar el valor de la variable
miNombre = "Aylin";
console.log("El valor almacenado en la variable miNombre es: ",miNombre);

var misApellidos = "";
console.log("El valor almacenado en la variable misApellidos es: ",misApellidos); //undefined
//una variable puede cambiar su valor durante la ejecucion del programa

console.warn("-- Declaracion de Variables utilizando prefijo CONST --")
// 2. Utilizando la palabra reservada CONST
//Una constante a diferencia de una variable es que su valor no cambiara durante toda la
//  ejecucion del programa, y al momento de ser declarada esta debera ser inicializada
// obligatoriamente.

const miMatricula = "240853";
console.log("El valor de la constante miMatricula es: ",miMatricula);

//Intentando modificar el vaalor de la constante

//miMatricula = "24XXXX";
//console.log("El valor de la constante miMatricula es: ",miMatricula);

//3. Utilizando la palabra reservada LET
//LET es el prefijp utilizado muy similar a VAR con la diferencia en su alcance (SCOPE)
//aquellas declaradas con VAR tienen un alcance global en el codigo no importando bloques o
//secciones, mientras que las svariables declaradas son LET soolo existiran dentro del bloque o
// funcion.

var fechaNacimiento = new Date("2006-06-08");
var miEdad = CalcularEdad(fechaNacimiento);
console.log("Tu edad es de: ",miEdad,"años.");

//Verificaos si es mayor de edad
if(miEdad>=18)
{
    var esMayorDeEdad = true;
    let esMenorDeEdad = false;
}
if(esMayorDeEdad)
    console.log("Eres mayor de edad.")
else
    console.log("Eres menos de edad.")
//console.log("Eres el valor de esMenorDeEdad es :", esMenorDeEdad);
//La variable booleana no puede persistir por el tipo de declaracion con LET, solo fue de
//alcanze local mientras el condicional (IF) se ejecuto.

function calcularEdad(fechaNacimiento)
{
    //Para calcular la edad requerimos de la fecha del dia de hoy.
    var fechaHoy = new Date();

    //Dado que los datos de la fecha son almacenados en milisegundos por default en
    //JavaScript, necesitamos una variable que nos permite saber el numero de milisegundos por
    //dia.
    let milisegundosPorDia = 24*60*60*1000;

    //Ya que tenemos los milisegundos por dia tenemos que restar a la fecha de hoy, la fecha 
    // en que nacimos para calcular los milisegundos que hemos vivido.
    letdiasVividos = (hoy - fechaNacimiento)/milisegundosPorDia;

    //Invocamos el metodo matematico de la funcion piso (FLOOR)
    let edad = diasVividos / 365.25
    edad = Math.floor(edad)

    return edad;
}

//Interpolacion de Datos

// ${}
misApellidos="Esteban Luna";
console.log(`Hola, ${miNombre} ${misApellidos} actualmente tienes ${miEdad} años.`);

//Autor: Aylin Esteban Luna.


