const empresas = [
    {nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
    {nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975},
    {nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
    {nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
    {nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006},
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
   ];

//============================ Empresas criadas depois dos anos 2000===============================================
let nascimento = empresas.filter((x) => x.anoDeCriacao > 2000);
console.log(nascimento);
/*
Array(2)
0: {nome: 'Facebook', valorDeMercado: 383, CEO: 'Mark Zuckerberg', anoDeCriacao: 2004}
1: {nome: 'Spotify', valorDeMercado: 30, CEO: 'Daniel Ek', anoDeCriacao: 2006}
length: 2
[[Prototype]]: Array(0)
*/
//==================================O nome de cada empresa e de seu CEO.============================================
let nomeEmpresa = empresas.map(x => x.nome);
console.log(nomeEmpresa);
//(6) ['Samsung', 'Microsoft', 'Intel', 'Facebook', 'Spotify', 'Apple']

let nomeCEO = empresas.map(x => x.CEO);
console.log(nomeCEO);
//(6) ['Kim Hyun Suk', 'Satya Nadella', 'Brian Krzanich', 'Mark Zuckerberg', 'Daniel Ek', 'Tim Cook']

//================================== O valor de todas as empresas somadas.============================================
let somaValor = empresas.reduce((acumulador, item) => acumulador += item.valorDeMercado,0);
console.log(`A soma de todos os valores de mercado é: ${somaValor}`);
//A soma de todos os valores de mercado é: 1840\\
