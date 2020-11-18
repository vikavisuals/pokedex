
// Button that searches for a pokemon
const searchPokemon = document.querySelector("#searchPokemon");
searchPokemon.addEventListener("click", fetchPokemon);


// Pokemon API info fetch
function fetchPokemon() {

  let pokeName = "dratini"
  let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`

  // Call the fetch function passing the url of the API as a parameter
  fetch(url)
    // Transform the data into json
    .then(function (response) {
      return response.json();
    })
    // Your code for handling the data you get from the API
    .then(function (results) {
      console.log(results);
      console.log(results.name);
      console.log(results.id);

      let displayPokemon = document.querySelector("#displayPokemon");
      displayPokemon.value = results.name;

      document.getElementById("displaySprite").src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${results.id}.png`;
    });

};