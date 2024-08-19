const sacar = (arreglo, item) =>{
    const indice = arreglo.indexOf(item);
    arreglo.splice(indice, 1);
    return arreglo;
}
let arregloFinal = ["dog", "perro"];
console.log(sacar(arregloFinal, "perro"))