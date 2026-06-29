const readline = require("readline/promises");

const{ stdin : input, stdout: output } = require ("process");

const rl = readline.createInterface({ input, output });

async function iniciar(){

    const nombre = await rl.question("Digite su  nombre ");
    const valLetras = /^([a-zA-Z]\s?)+$/;
    if (valLetras.test(nombre)) {
        console.log(`El nombre escrito fue : ${nombre}`);
    } else {
        console.log("Debe diguitar solo letras"); 
    }

}

iniciar();

for (let i = 1; i <= 30; i++) {
if(i % 3 == 0 && i % 5 == 0){
    console.log("fizzbuzz");
}else if(a % 5 == 0){
    console.log("buzz");
}else if(a % 3 == 0){
    console.log("fizz");
}

}
const listNumb = [12, 5, 88,3, 42,7,100];
for(let i = 0; i < listNumb.length; i++){
    if(listNumb[i] > 50) {
        console.log(`El numero ${listNumb[i]} es mayor a 50`);
    } else {
        console.log(`El numero ${listNumb[i]} es menor a 50`);
    }
}

const listNumeros =[10,-3, 7, -1, 5, 8, -2];
let suma = 0;
for(let i = 0; i < listNumeros.length; i++){
    suma += listNumeros[i];
}
console.log(`La suma de los números es: ${suma}`);  




   /* console.log(`El nombre escrito fue : ${nombre}`);
    rl.close();
}
async function iniciar(){ console.log("hola");}iniciar();*/