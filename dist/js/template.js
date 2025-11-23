function loadPokemon(pokemonId, pokemonName, pokemonImg, pokemonHeight, pokemonWeight) {
    return document.getElementById('wrapper').innerHTML += 
        `
            <div class="wrapper__card">
                <div class="wrapper__card_pokemon">
                    <div class="wrapper__card_pokemon-num">No. ${pokemonId + 1}</div>
                    <div class="wrapper__card_pokemon-name">${pokemonName}</div>
                    <div class="wrapper__card_pokemon-type" onload="${getPokemonTypes(pokemonId)}"></div>
                </div>
                <div class="wrapper__card_img" onclick="getPokemonInfo(${pokemonId})">
                    <img src="${pokemonImg}" alt="">
                </div>
                <div class="wrapper__card_description">
                    <div class="wrapper__card_description-weight">Height: ${pokemonHeight}0cm</div>
                    <div class="wrapper__card_description-height">Weight: ${pokemonWeight}kg</div>
                </div>
            </div>
        `;
}



function loadPokemonInfo(pokemonId, pokemonName, pokemonImg) {
    info.innerHTML = 
    `
        <div class="info__pokemon">
            <div class="info__pokemon_num">No. ${pokemonId + 1}</div>
            <div class="info__pokemon_name">${pokemonName}</div>
            <div class="info__pokemon_type" onload="${getPokemonTypesForInfo(pokemonId)}"></div>
        </div>
        <div class="info__img">
            <img src="${pokemonImg}" alt="">
        </div>
        <div class="info__field" onload="${getMainInfo(pokemonId)}">
            
        </div>
    `
}