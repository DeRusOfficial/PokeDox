async function getFirstPokemons() {
    for(pokemonId; pokemonId < endNum; pokemonId++) { 
        loadPokemon(
            pokemonId,
            await getPokemonName(pokemonId), 
            await getPokemonImg(pokemonId), 
            await getPokemonHeight(pokemonId), 
            await getPokemonWeight(pokemonId)
        );
    }
}

async function getMorePokemons() {
    beginNum = beginNum + 20;
    endNum = endNum + 20;

    pokemonId = beginNum;

    for(pokemonId; pokemonId < endNum; pokemonId++) { 
        loadPokemon(
            pokemonId,
            await getPokemonName(pokemonId), 
            await getPokemonImg(pokemonId),
            await getPokemonHeight(pokemonId), 
            await getPokemonWeight(pokemonId)
        );
    }
}

async function getPokemonInfo(pokemonId) {
    bg.style.display = 'flex';
    bg.style.position = 'fixed';
    info.style.display = 'flex';
    info.style.zIndex = '2';

    loadPokemonInfo(
        pokemonId,
        await getPokemonName(pokemonId), 
        await getPokemonImg(pokemonId)
    );
}



async function getPokemonName(pokemonId) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId + 1}`);
        let responseToJson = await response.json();
        let pokemonName = responseToJson.name;
        return pokemonName.charAt(0).toUpperCase() + String(pokemonName).slice(1);
}

async function getPokemonImg(pokemonId) {
    let pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId + 1}.svg`;
    // let pokemonImg = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemonId + 1}.svg`;
    return pokemonImg;
}

async function getPokemonHeight(pokemonId) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId + 1}`);
    let responseToJson = await response.json();
    let pokemonHeight = responseToJson.height;
    return pokemonHeight;
}

async function getPokemonWeight(pokemonId) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId + 1}`);
    let responseToJson = await response.json();
    let pokemonWeight = responseToJson.weight;
    return addComma(pokemonWeight);
}

async function getPokemonTypes(pokemonId) {
    let cardPokeType = document.getElementsByClassName('wrapper__card_pokemon-type');
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId + 1}`);
    let responseToJson = await response.json();
    console.log(pokemonId, cardPokeType[pokemonId].innerHTML)
    cardPokeType[pokemonId].innerHTML = '';
    for(let i = 0; i < responseToJson.types.length; i++) {
        cardPokeType[pokemonId].innerHTML += `
            <img src="./icons/${await responseToJson.types[i].type.name}.svg" alt="">
        `;
    }
} 



async function getPokemonTypesForInfo(pokemonId) {
    let cardPokeType = document.getElementsByClassName('info__pokemon_type');
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId + 1}`);
    let responseToJson = await response.json();
    console.log(cardPokeType[0].innerHTML)
    cardPokeType[0].innerHTML = '';
    for(let i = 0; i < responseToJson.types.length; i++) {
        cardPokeType[0].innerHTML += `
            <img src="./icons/${await responseToJson.types[i].type.name}.svg" alt="">
        `;
    }
} 

// More Infos about Pokemon
let infoTypes = document.getElementsByClassName('info__types');
let infoAbilities = document.getElementsByClassName('info__abilities');

async function getMainInfo(pokemonId) {
    let infoField = document.getElementsByClassName('info__field');
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId + 1}`);
    let responseToJson = await response.json();
    infoField[0].innerHTML = '';
    if(responseToJson.types.length) {
        infoField[0].innerHTML += `
            <div class="info__types">Types: </div>
        `;
        for(let i = 0; i < responseToJson.types.length; i++) {
            infoTypes[0].innerHTML += `
                <div class="info__types_type">${responseToJson.types[i].type.name} <img src="./icons/${await responseToJson.types[i].type.name}.svg" alt=""</div>
            `;
        }
    }
    if(responseToJson.abilities.length) {
        infoField[0].innerHTML += `
            <div class="info__abilities">Abilities: </div>
        `;
        for(let i = 0; i < responseToJson.abilities.length; i++) {
            infoAbilities[0].innerHTML += `
                <div class="info__abilities_ability">${responseToJson.abilities[i].ability.name}</div>
            `;
        }
    }
}


