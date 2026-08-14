/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de alturaEmM e seu IMC é de 25.925
Luiz Otávio nasceu em 1980
*/
const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM); // Peso / (alturaEmM * alturaEmM)
let anoNascimento = 2026 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg')
console.log('tem', alturaEmM, 'de alturaEmM e seu IMC é de', indiceMassaCorporal)
console.log(nome, 'nasceu em', anoNascimento)