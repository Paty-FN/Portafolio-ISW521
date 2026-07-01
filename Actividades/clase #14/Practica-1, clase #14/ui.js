export function mostrarPedido(p){
    console.log(`Pedido creado para ${p.cliente}: ${p.producto} - ₡${p.precio}`);
}

export function mostrarTotal(t){
    console.log(`Total del día: ₡${t}`);
}