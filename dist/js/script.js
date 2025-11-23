let pokemonId = 0;
let beginNum = 0;
let endNum = 20;

let bg = document.getElementById('bg');
let info = document.getElementById('info');

const allPokemonNames = [];
let btn = document.getElementById('btn');
let input = document.getElementById('input-search');



function init() {
    getFirstPokemons();
}



function closePokemonInfo() {
    if(event.target == bg) {
        bg.style.display = 'none';
        info.style.display = 'none';
    }
}



function addComma(pokemonWeight) {
    let array = [];
    let letters;
    letters = pokemonWeight.toString()

    for(let i = 0; i < pokemonWeight.toString().length; i++) {
        array.push(letters.charAt(i))

        if(i == pokemonWeight.toString().length - 1) {
            array.splice(i, 0, ',')
            return loadComma(array)
        }
    }
}

function loadComma(array) {
    let variable = '';
    for(let j = 0; j < array.length; j++) {
        variable += array[j]
    }
    return variable;
}



getAllNames()

async function showNamesByLetters() {
    let search = input.value.toLowerCase();
    if(search.length < 3) {
        btn.style.display = 'flex';
        pokemonId = 0;
        document.getElementById('wrapper').innerHTML = '';
        await getFirstPokemons();
    } else {
        document.getElementById('wrapper').innerHTML = '';
        btn.style.display = 'none';
        for(let i = 0; i < allPokemonNames.length; i++) {
            if(allPokemonNames[i].includes(search)) {
                loadPokemon(
                    i,
                    await getPokemonName(i), 
                    await getPokemonImg(i), 
                    await getPokemonHeight(i), 
                    await getPokemonWeight(i)
                )
            }
        }
    }
}



async function getAllNames() {
    
    let pokemonNames = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1302`);
    let pokemonNamesToJson = await pokemonNames.json();
    for(let i = 0; i < pokemonNamesToJson.count; i++) {
        allPokemonNames.push(pokemonNamesToJson.results[i].name)
    }
    return allPokemonNames 
}