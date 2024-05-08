function dobrarNumero(array){
    return array.map(num => num*2)
}

let numero = [1, 2, 3, 4, 5, 6];
let numeroDobrado = dobrarNumero(numero);
console.log(numeroDobrado);