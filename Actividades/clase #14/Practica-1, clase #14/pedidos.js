export const pedidos=[];

export function crearPedido({cliente, producto, precio, notas},...extras){
 const pedido={cliente,producto,precio,notas,extras};
 pedidos.push(pedido);
 return pedido;
}

export function aplicarDescuento(pedido, porcentake){
    return {
        ...pedido,
        precio: (pedido.precio ?? 0) - ((pedido.precio ?? 0) * porcentake / 100)
    };
}

export function calcularTotalDia(){ 
    return pedidos.reduce((acc, p) => acc + (p.precio ?? 0), 0);    
    
}