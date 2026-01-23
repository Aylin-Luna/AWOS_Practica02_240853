// Tipos de datos en JavaScript

// Personalización de consola
const bg = "linear-gradient(45deg, rgba(52,152,219,1) 0%, rgba(26,188,156,1) 50%)";
const style_console = `background:${bg}; color:white; border-radius:6px; padding:4px; font-size:1rem; font-weight:bold`;

console.log("%c2.- Ejercicio 02: Tipos de Datos", style_console);

// 1. UNDEFINED
console.warn("1.- UNDEFINED (No definido)");

let usuarioLogeado;
var rolUsuario;
const ultimoAcceso = undefined;

console.log("Valores actuales:");
console.log(`usuarioLogeado = ${typeof usuarioLogeado}`);
console.log(`rolUsuario = ${typeof rolUsuario}`);
console.log(`ultimoAcceso = ${typeof ultimoAcceso}`);

usuarioLogeado = "Aylin E";
console.log(`El valor de usuarioLogeado es: ${usuarioLogeado} y su tipo es: ${typeof usuarioLogeado}`);

// 2. BOOLEAN
console.warn("2.- BOOLEAN (TRUE / FALSE)");

var hayUsuarioLogeado;

function validacionUsuarioLogeado() {
    console.log(`hayUsuarioLogeado = ${hayUsuarioLogeado}, tipo: ${typeof hayUsuarioLogeado}`);

    if (hayUsuarioLogeado === true) {
        console.log("La app mostrará el menú de usuario");
    } else if (hayUsuarioLogeado === false) {
        console.log("La app NO mostrará el menú de usuario");
    } else {
        console.log("Dato inválido, se esperaba un boolean");
    }
}

hayUsuarioLogeado = true;
console.log("Test 1");
validacionUsuarioLogeado();

hayUsuarioLogeado = false;
console.log("Test 2");
validacionUsuarioLogeado();

hayUsuarioLogeado = 52.5;
console.log("Test 3");
validacionUsuarioLogeado();

// 3. NUMBER
console.warn("3.- NUMBER");

let userID_Owner = 225;
let priceProperty = 125000.50;
let latGPS = 20.240508;
let longGPS = -97.952881;
let altGPS = 1180;

console.log(`Datos de la propiedad:
ID Usuario: ${userID_Owner}
Precio: ${priceProperty}
Latitud: ${latGPS}
Longitud: ${longGPS}
Altitud: ${altGPS}`);

console.log(`Tipos de datos:
ID Usuario: ${typeof userID_Owner}
Precio: ${typeof priceProperty}
Latitud: ${typeof latGPS}
Longitud: ${typeof longGPS}
Altitud: ${typeof altGPS}`);

// 4. STRING
console.warn("4.- STRING");

var fullnameOwner = "Aylin Esteban Luna";
let nameProperty = " Hermosa Casa en la playa ";
let descriptionProperty = "Casa en la playa con vista al mar";
var statusProperty = "Disponible";

console.log(`Nombre en mayúsculas: ${fullnameOwner.toUpperCase()}`);
console.log(`Descripción en minúsculas: ${descriptionProperty.toLowerCase()}`);
console.log(`Número de caracteres: ${fullnameOwner.length}`);
console.log(`Apellido: ${fullnameOwner.slice(8)}`);
console.log(`Nombre sin espacios: ${nameProperty.trim()}`);
console.log(`Descripción modificada: ${descriptionProperty.replace("mar", "río")}`);

// 5. BIGINT
console.warn("5.- BIGINT");

let numeroGrande = 12345678901234567890n;
console.log(`BigInt: ${numeroGrande}, tipo: ${typeof numeroGrande}`);

// 6. SYMBOL
console.warn("6.- SYMBOL");

const s1 = Symbol(4);
const s2 = Symbol(4);

console.log(`Symbol 1: ${s1.description}`);
console.log(`Symbol 2: ${s2.description}`);
console.log(`¿Son iguales? ${s1 === s2}`);

// 7. NULL
console.warn("7.- NULL");

let isPremiumUser = null;
let todayDate = new Date();

console.log(`Usuario: ${usuarioLogeado}`);
console.log(`Fecha login: ${todayDate}`);
console.log(`Premium: ${isPremiumUser}`);

// Autor: Aylin Esteban Luna
