let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const numeros = [varA, varB, varC];
varA = numeros[1];
varB = numeros[2];
varC = numeros[0];

console.log(varA, varB, varC);