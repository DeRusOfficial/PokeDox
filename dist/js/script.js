// const BEGIN_URL = `https://pokeapi.co/api/v2/pokemon/?offset=${beginNum}&limit=${endNum}`;

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// const IMG_URL = 'https://pokeapi.co/api/v2/pokemon-form/';

let pokemonId = 0;
let beginNum = 0;
let endNum = 20;


let bg = document.getElementById('bg');
let info = document.getElementById('info');



function init() {
    getFirstPokemons();
}



function getPokedoxApi() {

}



function loadPokemon(pokemonId, pokemonName, pokemonType, pokemonImg, pokemonHeight, pokemonWeight, pokemonAbilities) {
    console.log(pokemonWeight)
    addComma(pokemonWeight)
    document.getElementById('wrapper').innerHTML += 
        `
            <div class="wrapper__card">
                <div class="wrapper__card_pokemon">
                    <div class="wrapper__card_pokemon-num">#${pokemonId + 1}</div>
                    <div class="wrapper__card_pokemon-name">${pokemonName}</div>
                    <div class="wrapper__card_pokemon-type">
                        <img src="${pokemonType}" alt="">
                    </div>
                </div>
                <div class="wrapper__card_img" onclick="getPokemonInfo(${pokemonId})">
                    <img src="${pokemonImg}" alt="">
                </div>
                <div class="wrapper__card_description">
                    <div class="wrapper__card_description-weight">Height: ${pokemonHeight}0cm</div>
                    <div class="wrapper__card_description-height">Weight: ${pokemonWeight}kg</div>
                    <div class="wrapper__card_description-abilities">Abilities: ${pokemonAbilities}</div>
                </div>
                <div class="wrapper__card_poke">
                    <div class="wrapper__card_poke-feature">
                        <img src="" alt="">
                    </div>
                    <div class="wrapper__card_poke-feature">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        `;
}

function addComma(pokemonWeight) {
    // let array = [];
    // array = pokemonWeight.split(" ")
    console.log(pokemonWeight.toString().length)
}

async function getFirstPokemons() {
    for(pokemonId; pokemonId < endNum; pokemonId++) { 
        loadPokemon(
            pokemonId,
            await getPokemonName(pokemonId), 
            await getPokemonType(pokemonId),
            await getPokemonImg(pokemonId), 
            await getPokemonHeight(pokemonId), 
            await getPokemonWeight(pokemonId),
            await getPokemonAbilities(pokemonId)
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
            await getPokemonType(pokemonId),
            await getPokemonImg(pokemonId),
            await getPokemonHeight(pokemonId), 
            await getPokemonWeight(pokemonId),
            await getPokemonAbilities(pokemonId)
        );
    }
}



async function getPokemonInfo(pokemonId) {
    bg.style.display = 'flex';
    info.style.display = 'block';

    loadPokemonInfo(
        pokemonId,
        await getPokemonName(pokemonId), 
        await getPokemonType(pokemonId),
        await getPokemonImg(pokemonId),
        await getPokemonHeight(pokemonId), 
        await getPokemonWeight(pokemonId)
    );
}

function loadPokemonInfo(pokemonId, pokemonName, pokemonType, pokemonImg) {
    info.innerHTML = 
    `
        <div class="info__pokemon">
            <div class="info__pokemon_num">#${pokemonId + 1}</div>
            <div class="info__pokemon_name">${pokemonName}</div>
            <div class="info__pokemon_type">
                <img src="${pokemonType}" alt="">
            </div>
            <div class="info__pokemon_img">
                <img src="${pokemonImg}" alt="">
            </div>
        </div>
        <div class="info__main">
            <div class="info__main_type">sd</div>
            <div class="info__main_abilities"></div>
        </div>
        <div class="info__stats"></div>
        <div class="info__evolution"></div>
    `
}

function closePokemonInfo() {
    bg.style.display = 'none';
    info.style.display = 'none';
}




async function getPokemonName(pokemonId) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId + 1}`);
        let responseToJson = await response.json();
        let pokemonName = responseToJson.name;
        return pokemonName;
}

async function getPokemonType(pokemonId) {
    let pokeType = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId + 1}`);
    let pokeTypeJson = await pokeType.json();
    let pokemonType = `./icons/${pokeTypeJson.types[0].type.name}.svg`
    return pokemonType;
}

async function getPokemonImg(pokemonId) {
    let pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId + 1}.svg`;
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
        return pokemonWeight;
}

async function getPokemonAbilities(pokemonId) {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId + 1}`);
        let responseToJson = await response.json();
        let pokemonAbilities = responseToJson.abilities[0].ability.name;
        return pokemonAbilities;
}