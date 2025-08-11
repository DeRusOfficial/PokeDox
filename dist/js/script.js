// const BEGIN_URL = `https://pokeapi.co/api/v2/pokemon/?offset=${beginNum}&limit=${endNum}`;

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/';

// const IMG_URL = 'https://pokeapi.co/api/v2/pokemon-form/';


let beginNum;
let endNum;


let id = 0;
let biggerId = 20;

let namesOfPokemon = [];


// getPokemonsName();
// getPokemonsInfo();


async function getPokemonsName() {
    beginNum = 0;
    endNum = 20;
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${beginNum}&limit=${endNum}`);
    let responseToJson = await response.json();

    

    
    for(id; id < 20; id++) { 
        // let responseImg = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id + 1}`);
        let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id + 1}.svg`;
        
        let pokeType = await fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}`);
        let pokeTypeJson = await pokeType.json();
        console.log(pokeTypeJson.types[0].type.name);

        let pokemonType = `./icons/${pokeTypeJson.types[0].type.name}.svg`;
        

        // let responseImgJson = await responseImg.json();
        console.log(responseToJson.results[id].name);
        document.getElementById('wrapper').innerHTML += loadPokemons(id, responseToJson.results[id].name, pokeImg, pokemonType);
        // responseImgJson.sprites.front_default
    }
    console.log(namesOfPokemon);
}

// async function getPokemonsInfo() {
//     for(id; id < 10; id++) {
//         let response = await fetch(BASE_URL + `${id}`);
//         let responseToJson = await response.json();
//         console.log(responseToJson);
//     }
// }

function loadPokemons(id, pokemonName, img, pokemonType) {
    return `
        <div class="wrapper__card">
            <div class="wrapper__card_pokemon">
                <div class="wrapper__card_pokemon-num">#${id + 1}</div>
                <div class="wrapper__card_pokemon-name">${pokemonName}</div>
                <div class="wrapper__card_pokemon-type">
                    <img src="${pokemonType}" alt="">
                </div>
            </div>
            <div class="wrapper__card_img">
                <img src="${img}" alt="">
            </div>
            <div class="wrapper__card_pokemon">
                <div class="wrapper__card_pokemon-feature">
                    <img src="" alt="">
                </div>
                <div class="wrapper__card_pokemon-feature">
                    <img src="" alt="">
                </div>
            </div>
        </div>
    `;
}



async function loadMorePokemons() {
    // console.log('Hello');
    // console.log(id);
    console.log(beginNum);
    beginNum = beginNum + 20;
    endNum = endNum + 20;
    id = beginNum;
    console.log(beginNum);
    console.log(endNum);
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${beginNum}&limit=${endNum}`);
    let responseToJson = await response.json();

    // console.log(responseImgJson.sprites);
    for(id; id < endNum; id++) { 
        // let responseImg = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id + 1}`);
        let pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id + 1}.svg`;
        // let responseImgJson = await responseImg.json();

        let pokeType = await fetch(`https://pokeapi.co/api/v2/pokemon/${id + 1}`);
        let pokeTypeJson = await pokeType.json();
        console.log(pokeTypeJson.types[0].type.name);

        let pokemonType = `./icons/${pokeTypeJson.types[0].type.name}.svg`;


        console.log(responseToJson.results[id].name);
        document.getElementById('wrapper').innerHTML += loadPokemons(id, responseToJson.results[id].name, pokeImg, pokemonType);
    }
    console.log(id);

}