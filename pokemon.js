

async function create(event) {
    
    
    let ul = document.getElementById('lista-de-pokemon');

    ul.innerHTML =  "Carregando..." + "</br>"

    let resposta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    let jsonData = await resposta.json();
    let pokemons = jsonData.results;

    ul.innerHTML = ""
    

    for (let pokemon = 0; pokemon < pokemons.length; pokemon++) {
        
        let pokemonAtual = pokemons[pokemon];

         ul.innerHTML += `
                <span>${pokemonAtual.name}<br></span>
         ` 
    }


    
    console.log(jsonData);




}