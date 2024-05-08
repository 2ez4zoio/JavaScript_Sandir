function raizQuadrada(array){
    return array.map(num => Math.sqrt(num))
}

let numero = [4, 9, 10, 6];
let raizQuadrada = raizQuadrada(numero);
console.log(raizQuadrada);