
// Button that creates a name for textbox
const searchPokemon = document.querySelector("#searchPokemon");
searchPokemon.addEventListener("click", fetchPokemon);

function fetchPokemon() {

  let url = `https://pokeapi.co/api/v2/pokemon/butterfree/`

  // Call the fetch function passing the url of the API as a parameter
  fetch(url)
    // Transform the data into json
    .then(function (response) {
      return response.json();
    })
    // Your code for handling the data you get from the API
    .then(function (results) {
      console.log(results);
      let displayPokemon = document.querySelector("#displayPokemon");
      displayPokemon.value = results.name;
    })

};

function fetchSprite() {

let url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png'

  // Call the fetch function passing the url of the API as a parameter
  fetch(url)
    // Transform the data into json
    .then(function (response) {
      return response.json();
    })
    // Your code for handling the data you get from the API
    .then(function (results) {
      console.log(results);
      let displayPokemon = document.querySelector("#displayPokemon");
      displayPokemon.value = results.name;
    })

};