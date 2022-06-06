var vetor = [1,4,7,1,2,1,4,25,3,7];

let media = vetor.reduce((acumulador,vetor) => acumulador += vetor/10,0);


console.log(media);


/*- Dado um array V de 10 posições:
v - 1,4,7,1,2,1,4,25,3,7 
Utilizando Reduce, imprima no console o resultado da média dos valores de V*/