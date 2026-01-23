//Estilazacion de la barra zona de pruebas en el DevTools en el navegador
console.log("%cEjercicio 03: Funciones",style_console);

//1. Funciones procedurales, vacias, VOID, sin valor de retorno y sin parametros de entrada

function saludar(){
    console.log("Bienvenido al Sistemas de Bienes Raices");
}
console.warn("1. Funciones sin valor de retorno y sin parametros de entrada");
saludar();

//2. Funciones sin valor de retorno, pero que si recibe parametros es decir datos de entrada

function saludar_usuario(username, gender){
    if (gender ==="H")
    console.log(`Bienvenido, ${username} al Sistema de Bienes Raices`);
    else if (gender ==="M")
    console.log(`Bienvenida, ${username} al Sistema de Bienes Raices`);
    else
    console.log(`Bienvenid@, ${username} al Sistema de Bienes Raices`);
}

console.warn("2. Funciones sin valor de retorno, con parametros de entrada");
saludar_usuario ("Jonathan", "H");
console.log("-------------------------------------------------------------");
saludar_usuario ("Patricia", "M");
console.log("-------------------------------------------------------------");
saludar_usuario ("Guadalupe", null);

//3. Funciones que reto9ornan un dato, pero que no reciben parametros de entrada

function fecha_actual(){
    const fecha = new Date();
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const fecha_formatomx = `${dias[fecha.getDay()]}, ${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`;
    return fecha_formatomx;
}
console.warn("3. Funciones que retornan un dato, pero que no tienen parametros");
let hoy = fecha_actual();
console.log(`Bienvenid@ al Sistema de Bienes Raices, hoy es: ${hoy}`);
/*Imprimiendo el valor y que tipo de dato es*/
console.log(fecha_actual());
console.log(typeof fecha_actual());

//4. Funciones que retornan un dato y que reciben parametros de entrada

function login(username, password) {
    let userValidation = false;

    if (username === "admin" && password === "12345") {
        userValidation = true;
        console.log("Bienvenido usuario Admin!");
    } 
    else if (username === "admin" && password !== "12345") {
        userValidation = true;
        console.log("Lo sentimos, la contraseña es incorrecta");
    } 
    else if (username !== "admin" && password === "12345") {
        userValidation = true;
        console.log("Lo sentimos, el nombre de usuario no existe");
    } 
    else {
        userValidation = true;
        console.log("Por favor verifique sus credenciales de acceso");
    }

    return userValidation;
}

console.warn("4. Funciones que retornan un dato y que reciben parametros de entrada")
var loginStatus;
//Test 1 - Usuario y contraseña correctos
console.log("Test 1 - usuario:admin | contraseña:12345");
loginStatus = login("admin", "12345");
console.log(`${loginStatus ? 'El usuario admin se ha loguedo satisfactoriamente':'Hubo un error en el login del usuario admin'}`);

//Test 2 - Usuario correcto incorrecto
console.log("Test 2 - usuario:Administrador | contraseña:12345");
loginStatus = login("Administrador", "12345");
console.log(`${loginStatus ? 'El usuario admin se ha loguedo satisfactoriamente':'Hubo un error en el login del usuario admin'}`);

//Test 3 - Contraseña incorrecta
console.log("Test 3 - usuario:admin | contraseña:54321");
loginStatus = login("admin", "54321");
console.log(`${loginStatus ? 'El usuario admin se ha loguedo satisfactoriamente':'Hubo un error en el login del usuario admin'}`);

//Test 4 - Usuario y contraseña incorrectos
console.log("Test 4 - usuario:jon_1 | contraseña:mipassword");
loginStatus = login("Aylin", "mipassword");
console.log(`${loginStatus ? 'El usuario admin se ha loguedo satisfactoriamente':'Hubo un error en el login del usuario admin'}`);


//FUNCIONES ANONIMAS, FUNCIONES FLECHA (ARROW), FUNCIONES LAMDA
/* A diferencia de las fnciones nombradas este tipo de funciones no suelen ser reutilizadas en el codigo
solo se ejecutan una sola vez, dando velocidad, individualidad y privacidad a los datos utilizados en el proceso*/

//5. Funcion anonima sin parametro

isNewUser= function (){
    const hoy= new Date ();

    return (
        lastLogin.getFullYear()===hoy.getFullYear() &&
        lastLogin.getMonth()=== hoy.getMonth() &&
        lastLogin.getDate()=== hoy.getDate() 
    );

};

console.warn("5. Funciones Anonimas sin parametros");

console.log("Test 1 - Fecha de ultimo acceso es igual a la fecha de hoy");
console.log(`La fecha del ultiimo acceso es: ${lastLogin}`);
console.log(`El usuario logueado ees: ${isNewUser?"Nuevo Usuario":"Usuario Antiguo"}`);

//6. FUNCIONES ANONIMAS CON PARAMETROS (VERSION ARROW O )

const sumar = (a,b) =>{
    let resultado= a+b;
    return resultado;
}

console.warn("6. Funciones anonimas con parametros")
console.log(`El resultado de la suma de 15 + 83 es: ${sumar(15,83)}`);

/* Cuando la funcion anonima tiene solo una linea de operacion se puede usar una version 
simplificada que no se usa {} llaves, ni la palabra reservada (return)*/

const multiplicar =(a,b) => a*b;
console.log (`El resultado de la multiplicacion de 15 * 125 es: ${multiplicar(15,125)}`);

//7. Funciones calback (Regreso de llamado)
console.warn("7. Funciones calback (Regreso de llamado)")
const recoverPassword = function(email, calback)
{
    // Generamos el codigo a enviar al usuario
    const recoveryCode= Math.floor(1000000 + Math.random()*900000)

    console.log(`==============================================
        Solicitud de trecuperacion recibida
        Crorreo del usuario solicitante: ${email}
        Generando codigo de recuperacion... 
        Codigo de seguridad generado: ${recoveryCode}
        Enviando el correo al usuario...
        Correo enviado a: ${email}. con el codigo de seguridad:${recoveryCode}
        ======================================================================`)


// Definiendo la respuesta del sistema

const response={
    status: "Ok",
    message: "Codigo de recuperacion enviado satisfactoriamente"
};

calback(response);
};
//Invocamos la funcion recoveryPassword y le pasamos como parametro una funcion anonima (calback)
recoverPassword("aylin_luna@gmail.com", function(systemResponse){
    console.log("Respuesta del sistema: ");
    console.log(systemResponse.menssage);
});

//Autor: Aylin Esteban Luna