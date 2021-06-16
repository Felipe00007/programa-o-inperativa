// Aula 03 - 31/05/2021
// ex08.js
// Exercício Gol!

let nomeJogador = "Messi";
let golsJogador = 0;
let precoEmDolares = 0;

function fazerGol(){
    golsJogador ++;
    console.log("GOL!!!!!!!!!");
    precoEmDolares = precoEmDolares + 10000;
}

fazerGol();
fazerGol();
fazerGol();
fazerGol();
fazerGol();

console.log("O jogador " + nomeJogador + " fez " + golsJogador + " gols e está valendo $" + precoEmDolares);