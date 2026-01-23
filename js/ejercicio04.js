//Estilizacion de la barra zonas a prueba en el DevTools en el navegador
console.log("%cEjercicio 04: Funciones Callback",style_console);

console.warn("1. Propiedades de un Objeto");

let propertyID=1;
let propertyName="Departamento em el centro de la Ciudad de Mexico";
let propertyDescription="Departamento nuevo, con 3 recamaras, 1 baño, cocina integral, sala-comedor, area de lavado y 1 cajon de estacionamiento.";
let propertyType="D";  //H: House, D: Department, T: Terrain L:Locale W:Warehouse C:Cabain
let propertyIsSaleable=false;
let propertyIsRentable=true;
let propertyPrice=7500.00;
let propertyLat=19.4283813;
let propertyLong=-99.1020177;
let propertyToken=Symbol("D-12558-CDMX-MX-S");
let propertyIncluidedServices=["Agua","Luz","Gas"];
let propertyImage=null;
let propertyOwnerID=324112
let propertyStatus="Good";

console.log(`Datos de la propiedad en RENTA:
    Nombre: ${propertyName}
    Descripcion: ${propertyDescription}
    Tipo:${propertyType}
    Precio:${propertyPrice}
    Ubicacion: Latitud:${propertyLat} Longitud:${propertyLong}
    Servicios incluidos:${propertyIncluidedServices}
    En renta:${propertyIsRentable}
    En venta:${propertyIsSaleable}
    Token:${propertyToken.description}
    Dueño:${propertyOwnerID}
    Imagen${propertyImage}
    `);

//2. 

property1={
    id:1,
    name:"Departamento en el centro de la Ciudad de Mexico",
    description:"Hermoso departamento con 3 recamaras, 1 baño, cocina integral, sala-comedor, area de lavado y 1 cajon de estacionamiento.",
    type:"D",
    price:7500.00,
    isRentable:true,
    isSaleable:false,
    lat:19.4283813,
    incluidedServices:["Agua","Luz","Gas"],
    status:"Good",
    token:Symbol("D-12558-CDMX-MX-S"),
    ownerID:324112
    
}

//Imprecion del objeto en forma tabla
console.table(property1)

//3. Leyendo 

console.warn("3. Lectura de Propiedades de un Objeto");

console.log(`El usuario con id: ${property1.ownerID} esta rentando un: ${property1.name} el cual se describe cómo: ${property1.description} por un precio de: ${property1.price} con los servicios incluidos de: ${property1.includedServices}  ${property1.isSaleable?", actualmente esta a la venta": "que por el momento no esta a la venta"}.` );


// 4. Modificación de los valores de las propiedades de un objeto 
/* Para modificar los datos de una variable basta con acceder a la propiedad deseada a modifica y asignarle su nuevo a través del signo = */

property1.price= 8200.00
property1.isSaleable= true;
property1.includedServices= ["Agua", "Luz", "Gas", "Internet", "Serguridad Privada"];


console.warn("4. Modificación de Propiedades de un Objeto");


console.log(`El usuario con id: ${property1.ownerID} esta rentando un ${property1.name}
    el cual se describe como ${property1.description} por un precio de: ${property1.price}
    con los servicios incluidos ${property1.incluidedServices}  ${property1.isSaleable}", actualmente
    esta a la venta": "que por el momento no esta a la venta"}.`);

    //Destruccion de objetos destructuring
    /*JavaScript es un lenguaje dinamico que permite que un objetopreviamente de un objeto previamnete
    definido pueda ser descompuesto en pequeñas*/

user1={
    userID:32412,
    name:"Aylin Luna",
    email: "aylin_luna@email.com",
    createAt: Date("2015/01/30  23:15:52"),
    lastLogin: Date("2026/01/20  08:00:05"),
    userRole: ("Vendedor"),
    totalProperties: 12,
    rating: 9.4
}

user2={
    userID:651656,
    name:"Luis Mejia",
    email: "luis_mejia@gmail.com",
    createAt: Date("2024/08/20  15:08:58"),
    lastLogin: Date("2026/01/19  23:15:35"),
    userRole:("Comprador"),
    rating:8.5,
    lastOperation: "Busacando Departamento para renta"
}
user3={
    userID:32412,
    name:"Angel Tecorralco",
    email: "angel_tecorralco@email.com",
    createAt: Date("2015/01/30  23:15:52"),
    lastLogin: Date("2026/01/20  08:00:05"),
    userRole: ("Vendedor"),
    totalProperties: 12,
    rating: 9.4
}

user4={
    userID:651656,
    name:"Grillito Saltarin",
    email: "saltarin_grillito@gmail.com",
    createAt: Date("2024/08/20  15:08:58"),
    lastLogin: Date("2026/01/19  23:15:35"),
    userRole:("Comprador"),
    rating:8.5,
    lastOperation: "Busacando Departamento para renta"
}


console.warn("5. Desestructuración de Objetos");


const formatDateMX = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

const buyerBid = (seller, buyer, property, price_bidded) => {
  const { userID: sellerID, email: sellerEmail } = seller;
  const { userID: buyerID, email: buyerEmail } = buyer;
  const { price, id } = property;

  const fecha_oferta = new Date();

  console.log(
    `El usuario: ${buyerID} (${buyerEmail}) está realizando una oferta al usuario: ${sellerID} (${sellerEmail})
por la cantidad ofertada de: ${price_bidded} por la propiedad ${id}
Precio real: ${price}
Fecha: ${formatDateMX(fecha_oferta)}`
  );

  const bid_accuracy = ((price_bidded / price) * 100).toFixed(2) + "%";

  return {
    buyerID,
    sellerID,
    propertyID: id,
    propertyPrice: price,
    date_bidded: fecha_oferta,
    bid_accurate: bid_accuracy
  };
};

// Test 1: El usuario 2 realiza una oferta de 7500
let bid1 = buyerBid(user1, user2, property1, 7500);
console.log(`La oferta tiene una exactitud del: ${bid1.bid_accurate}`);

// Test 2: El usuario 3 realiza una oferta de 8200
let bid2 = buyerBid(user1, user3, property1, 8200);
console.log(`La oferta tiene una exactitud del: ${bid2.bid_accurate}`);

// Test 3: El usuario 4 realiza una oferta de 10000
let bid3 = buyerBid(user1, user4, property1, 10000);
console.log(`La oferta tiene una exactitud del: ${bid3.bid_accurate}`);