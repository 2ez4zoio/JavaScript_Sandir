let original = "vasco";
let invertida = "";
let i = original.length - 1
while (i >= 0){
    invertida = invertida + original[i];
    i--;
}
console.log(`A string ${original} invertida é ${invertida}`);