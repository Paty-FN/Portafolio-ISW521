 /*function saludar(nombre) {
  return `Hola, ${nombre}!`;
} 

function procesar(funcionSaludo, nombre) {
  return funcionSaludo(nombre).toUpperCase();
} 

console.log(procesar(saludar, "Ana"));
// "Hola, ANA!"

//function declarada
//saludar("Ana"); // "Hola, Ana!"function saludar(nombre) { return `Hola, ${nombre}!`;}

//Asignación desestructurrada
const persona = {
  nombre: "Juan",
  edad: 30,
  rol: "dev"
};

const colores = ["rojo", "verde", "azul"];
const[primero, tercero] = colores;

console.log(nombre, puesto); // luis dev
console.log(primero, tercero); // rojo azul

//rest parameter
function sumar(...numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}
console.log(sumar(1, 2, 3, 4, 5)); // 15    
console.log(sumar(1, 2, 3, 4, 5)); // 15

//spread operator

const original = {nombre: "Equipo A", puntos: 10};
const actualizado = {...original, puntos: 15};
console.log(original.puntos); // 10
console.log(actualizado.puntos); // 15

const numeros = [1, 2, 3];
const copia = [...numeros, 4, 5];*/

import { Perro } from "./perro.js";

const miPerro = new Perro("perro ", 5, "marron", "toby", "doberman", "grande");

console.log(miPerro);
console.log(miPerro.ladrar());
console.log(miPerro.comer);
