let pikachu = {
    name: "Pikachu",
    health: 60,
    image: "img/pikachu.jpg",
    level: 11,
};

let bulbasaur = {
    name: "Bulbasaur",
    health: 75,
    image: "img/bulbasaur.jpg",
    level: 12,
};

let charmander = {
    name: "Charmander",
    health: 55,
    image: "img/charmander.jpg",
    level: 10,
};

let schiggy = {
    name: "Schiggy",
    health: 82,
    image: "img/schiggy.png",
    level: 12,
};

let possiblePokemon = [pikachu, bulbasaur, charmander, schiggy];
let randomPokemon;

let player = {
    name: "Davina",
    image: "img/pokemontrainer.jpg",
    pokemon: [],
}

let app = document.getElementById("app");

updateView();

function updateView() {
    getRandomPokemon();
    app.innerHTML = /*HTML*/`
    <div class="container">
        <div class="player">
            <img src="${player.image}">
            <div>${player.name}</div>
        </div>

        <div class="buttonContainer">
            <button onclick="catchPokemon()">Catch Pokemon</button>
            <button onclick="updateView()">Find a different Pokemon</button>
            <button onclick="showPokemonView()">Show your Pokemon's</button>
        </div>

        <div class="opposingPokemon">
            <div>${randomPokemon.name}</div>
            <div> Level: ${randomPokemon.level}</div>
            <img src="${randomPokemon.image}">
        </div>
    </div>
    `;
}




function caughtPokemonView() {
    app.innerHTML = /*HTML*/ `
    <div class ="caughtContainer">
    <h1>You caught ${player.pokemon[player.pokemon.length - 1].name}</h1>
    <div class ="buttonContainer">
                <button onclick ="updateView()">Find another one</button>
                <button onclick ="showPokemonView()">Show your pokemon</button>
            </div>
        </div>
    `;
}

function catchPokemon() {
    player.pokemon.push(randomPokemon);
    caughtPokemonView();
}

function showPokemonView() {
    app.innerHTML = /*HTML*/ `
    <div class="pokemonListContainer">
        <h1>Your Pokemon collection</h1>
        <ul>
            ${player.pokemon.map(p => `<li>${p.name} - Level ${p.level}</li>`).join('')}
        </ul>
        <div class="buttonContainer">
            <button onclick="updateView()">Go back</button>
        </div>
    </div>
    `;
}


function getRandomPokemon() {
    let randomNum = Math.floor(Math.random() * possiblePokemon.length);
    randomPokemon = possiblePokemon[randomNum];
}