let vetorA = [3,4,8,9,15];
let vetorNovo = new Array();

let vetorACubo = vetorA.map (x => {
    vetorNovo = x*x*x;
    
    console.log(vetorNovo);
});

























/*3 - Dado um array A de 5 posições:
arrayA = 3,4,8,9,15
Utilizando map, imprima no console um array gerado a partir de A, onde seus valores são o cubo dos valores de A*/