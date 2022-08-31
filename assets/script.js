function totalConIva(totales, impuest){
    let resultado = totales + impuest
    return resultado
}

function impuesto(total, impuestos){
    let resultado = total * impuestos
    return resultado
}

function acumulador(acumulador, prodSumada){
    return acumulador = acumulador + prodSumada
}

function prodCantidad(){
    let cantidadProducto = parseInt(prompt("Ingrese la cantidad de productos que desea"))
    return cantidadProducto
}

let producto = 0;
let acum = 0;
let imp = 0.16;
let iva = 0;
let total = 0;
let cantProducto = prodCantidad()
for(let i=0; i<cantProducto; i++){
    producto = parseFloat(prompt(`Ingrese el precio del producto ${i+1}`))
    acum = acumulador(acum, producto)
    
}
iva = impuesto(acum, imp);
total = totalConIva(acum,iva);

console.log(`Total sin IVA: ${acum} pesos`);
console.log(`IVA: ${iva} pesos`);
console.log(`Total: ${total} pesos`);