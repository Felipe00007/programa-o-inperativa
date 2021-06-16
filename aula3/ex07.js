// Aula 03 - 31/05/2021
// ex07.js
// Exercício de expressões matemáticas

let number1 = 10;
let number2 = 15;

function adicao(number1, number2){
    return number1 + number2;
}

function subtracao(number1, number2){
    return number1 - number2;
}

function multiplicacao(number1, number2){
    return number1 * number2;
}

function divisao(number1, number2){
    return number1 / number2;
}

console.log(number1 + " + " + number2 + " = " + adicao(number1,number2));
console.log(number1 + " - " + number2 + " = " + subtracao(number1,number2));
console.log(number1 + " * " + number2 + " = " + multiplicacao(number1,number2));
console.log(number1 + " / " + number2 + " = " + divisao(number1,number2));
