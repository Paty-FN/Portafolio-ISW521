const numero = [20, 15, 14, 36, 100];
numero.sort((a,b) => a - b); //sort es ordenar 
console.log(numero);

for (let i = 0; i < numero.length; i++) {
    console.log(numero[i]);
}

const declarativo = numero.map((n) => n * 2);
console.log(declarativo);

const precios = [100, 250, 80,400];
const caros = precios.filter((p) => p > 150);
console.log(caros);

const estudiantes = [

    {nombre : "Ana", carnet : "2024001"},
    {nombre : "Luis", carnet : "2024002"}
    
];
const formap = estudiantes.map(e => `${e.nombre}(${e.carnet})`.toUpperCase()); 
console.log(formap);

const gastos = [
    {cat: "comida", monto: 5000 },
    {cat: "transporte", monto: 2000 },
    {cat: "comida", monto: 3000 },
];

const porCategoria = gastos.reduce((acc, g) => {
     acc[g.cat] = (acc[g.cat] || 0) + g.monto;
     return acc;
 }, {});

 const totalGastos = gastos.reduce((acc, g) => acc + g.monto, 0);
 console.log(porCategoria);
 console.log(totalGastos);  

 const estudiantes = [
    { nombre: "Ana", cursos: ["HTML", "CSS"] },
    { nombre: "Luis", cursos: ["JavaScript", "React"] }
];

const cursos = estudiantes.flatMap(estudiante => estudiante.cursos);

console.log(cursos);
