let numeroDecimal = 10;
let numeroBinario = "";
do{
    numeroBinario = (numeroDecimal % 2) + numeroBinario;
    numeroDecimal = Math.floor(numeroDecimal / 2);
}while (numeroDecimal > 0)
    console.log(`O numero em binario é ${numeroBinario}`);