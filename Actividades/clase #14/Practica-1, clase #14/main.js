import resumen, {mostrarPedido, mostrarTotal} from "ui.js";
import {crearPedido, calcularTotalDia, aplicarDescuento, pedidos} from "pedidos.js";

const preferenciasCliente={
 ana:{direccion:{edificio:"Aulas 3"}},
 luis:{}
};

const edificio=preferenciasCliente.luis?.direccion?.edificio ?? "Sin edificio";
console.log(`Edificio: ${edificio}`);

const p1=crearPedido({cliente:"Ana",producto:"Casado",precio:2500,notas:"Sin cebolla"},"Queso");
const p2=crearPedido({cliente:"Luis",producto:"Café con pan",precio:1200,notas:undefined});

mostrarPedido(p1);
mostrarPedido(p2);

const descuento=aplicarDescuento(p1,10);
console.log(descuento);
