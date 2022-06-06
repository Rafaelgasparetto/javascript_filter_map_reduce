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

    let notas = filmes.filter((x)=> x.rating == 5);

    console.log(notas);
