const BEGIN_URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';
let id = 1;

let namesOfPokemon = [];



async function getPokemonsName() {
    let response = await fetch(BEGIN_URL);
    let responseToJson = await response.json();
    console.log(responseToJson.results);
    for(id; id < 20; id++) { 
        namesOfPokemon.push(responseToJson.results[id].name)
        console.log(responseToJson.results[id].name)
    }
    console.log(namesOfPokemon)
}

async function getPokemonsInfo() {
    for(id; id < 10; id++) {
        let response = await fetch(BASE_URL + `${id}`);
        let responseToJson = await response.json();
        console.log(responseToJson);
    }
}