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

    
    let idPares = filmes.filter((x) => {

        if(x.id %2 == 0){
           var ePar = x;
        }
    return ePar;
    });
    
    console.log(idPares);






/*6 - Com base no mesmo array do exercício n. 4, utilize a função filter para retornar apenas os filmes cujo id seja um número par.*/