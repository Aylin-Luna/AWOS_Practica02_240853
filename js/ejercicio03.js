// Estilización de consola
const style_console = "color: white; background: #8e44ad; padding:4px; border-radius:5px;";
console.log("%cEjercicio 03: Funciones", style_console);

// 1. Funciones sin retorno ni parámetros
function saludar() {
    console.log("Bienvenido al Sistema de Bienes Raíces");
}
console.warn("1. Funciones sin retorno y sin parámetros");
saludar();

// 2. Funciones sin retorno con parámetros
function saludar_usuario(username, gender) {
    if (gender === "H")
        console.log(`Bienvenido, ${username}`);
    else if (gender === "M")
        console.log(`Bienvenida, ${username}`);
    else
        console.log(`Bienvenid@, ${username}`);
}

console.warn("2. Funciones sin retorno con parámetros");
saludar_usuario("Jonathan", "H");
saludar_usuario("Patricia", "M");
saludar_usuario("Guadalupe", null);

// 3. Funciones con retorno sin parámetros
function fecha_actual() {
    const fecha = new Date();
    const dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    const meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    return `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
}

console.warn("3. Funciones con retorno sin parámetros");
console.log(`Hoy es: ${fecha_actual()}`);
console.log(`Tipo de dato: ${typeof fecha_actual()}`);

// 4. Funciones con retorno y parámetros
function login(username, password) {

    if (username === "admin" && password === "12345") {
        console.log("Bienvenido usuario Admin");
        return true;
    } 
    else if (username !== "admin") {
        console.log("El usuario no existe");
        return false;
    } 
    else {
        console.log("Contraseña incorrecta");
        return false;
    }
}

console.warn("4. Funciones con retorno y parámetros");

console.log("Test 1");
console.log(login("admin", "12345"));

console.log("Test 2");
console.log(login("Administrador", "12345"));

console.log("Test 3");
console.log(login("admin", "54321"));

// 5. Función anónima sin parámetros
let lastLogin = new Date();

const esUsuarioNuevo = function () {
    const hoy = new Date();
    return (
        lastLogin.getFullYear() === hoy.getFullYear() &&
        lastLogin.getMonth() === hoy.getMonth() &&
        lastLogin.getDate() === hoy.getDate()
    );
};

console.warn("5. Función anónima sin parámetros");
console.log(`¿Usuario nuevo?: ${esUsuarioNuevo()}`);

// 6. Funciones flecha
const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

console.warn("6. Funciones flecha");
console.log(`Suma 15 + 83 = ${sumar(15,83)}`);
console.log(`Multiplicación 15 * 125 = ${multiplicar(15,125)}`);

// 7. Callback
console.warn("7. Funciones Callback");

const recoverPassword = function(email, callback) {
    const recoveryCode = Math.floor(100000 + Math.random() * 900000);

    console.log(`Solicitud de recuperación
Correo: ${email}
Código generado: ${recoveryCode}`);

    const response = {
        status: "OK",
        message: "Código enviado correctamente"
    };

    callback(response);
};

recoverPassword("aylin_luna@gmail.com", function(systemResponse) {
    console.log("Respuesta del sistema:");
    console.log(systemResponse.message);
});

// Autor: Aylin Esteban Luna
