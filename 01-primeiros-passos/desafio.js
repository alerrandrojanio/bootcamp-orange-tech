/* 
Faça um programa para calcular o valor de um viagem.

Você terá 3 variaveis. Sendo elas:
1 - Preço do combustivel;
2 - Gasto médio de combustivel do carro por KM;
3 - Distancia em KM da viagem.

*/

const precoCombustivel = 5.79;
let KmPorLitro = 10;
let distanciaEmKm = 100;

let litrosConsumidos = distanciaEmKm / KmPorLitro;
let valorDaViagem = litrosConsumidos * precoCombustivel;

console.log('R$ '+ valorDaViagem.toFixed(2));


