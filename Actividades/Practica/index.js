const v8 = require("v8");

const variableJulian = {
    nombre: "Javascript",
    version: 2026,
};
// Convierte el objeto a un formato binario y calcula cuántos bytes ocupa en memoria.
const tamano = v8.serialize(variableJulian).length;
// v8.serialize() transforma el objeto en datos binarios para poder medir su tamaño.
//.length devuelve la cantidad de bytes que ocupa ese objeto serializado.
console.log(`El tamaño de la variable es: ${tamano} bytes`); 

const variableChise = {
    nombre: "Javascript",
    version: 2025,
};
const tamanoChise = v8.serialize(variableChise).length;
console.log(`El tamaño de la variable es: ${tamanoChise} bytes`);

if (true){
    var edad = 25;
    console.log(`La edad es: ${edad}`); 
}

 if (true){
let contador = 0;
console.log(contador); 
}

typeof edad; // "number"
typeof contador; // "undefined"
typeof variableJulian; // "object"
typeof variableChise; // "object"
 
let edad = 20;

if (edad < 13) {
    console.log("Niño");
} else if (edad < 18) {
    console.log("Joven");
} else {
    console.log("Adulto");
}

switch (edad) {
    case 0:
        console.log("Recién nacido");
        break;
    case 13:
        console.log("Adolescente");
        break;
    default:
        console.log("Edad no especificada");
};

const rol = "admin";

const permiso =
    rol === "admin" ? "total" :
    rol === "editor" ? "lectura-escritura" :
    rol === "viewer" ? "solo-lectura" :
    "sin-acceso";

console.log(permiso);

const rol = "admin";
let permiso;

switch (rol) {
    case "admin":
        permiso = "total";
        break;

    case "editor":
        permiso = "lectura-escritura";
        break;

    case "viewer":
        permiso = "solo-lectura";
        break;

    default:
        permiso = "sin-acceso";
}

console.log(permiso);
