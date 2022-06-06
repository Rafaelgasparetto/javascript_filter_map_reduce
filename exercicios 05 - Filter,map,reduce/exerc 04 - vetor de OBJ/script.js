var filmes= [
    {
    "id": 1,
    "title": "Die Hard",
    "valor": 12.00,
    "rating": 5.0
    },
    
    {
    "id": 2,
    "title": "Homem aranha 1",
    "valor":8.00,
    "rating": 4.0
    },
    
   {
    "id": 3,
    "title": "Homem de ferro",
    "valor": 7.00,
    "rating": 3.0
    },
    
   {
    "id": 4,
    "title": "Die Hard",
    "valor": 13.00,
    "rating": 5.0
    }
    ];
//            //DESCONTO DE 10%\\
    let desconto = filmes.map(x => {
        guardar = x.valor * (10/100)
    return guardar.toFixed(2);
    });

    console.log(`O desconto de 10% de cada filme: ${desconto}`);

//    //OS FILMES QUE SÃO ACIMA DE 10 REAIS\\

    let maiorValor = filmes.filter((el) => el.valor >= 10 );

    console.log(maiorValor);
    
//              //FILMES QUE SÃO ABAIXO DE 10 REAIS\\
    let menorValor = filmes.filter((el)=> el.valor < 10);
    console.log(menorValor);


//    //NAO CONSEGUI AINDA FAZER A COMPARAÇÃO DE FILMES COM O VALOR MENOR QUE 10 REAIS :////
    let mediaMenores = filmes.map(x =>{
 
        x.menorValor/x.valor;

        return x.menorValor/x.menorValor;

    })
    
    console.log(mediaMenores);


    