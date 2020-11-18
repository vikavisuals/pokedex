
// Button that searches for a pokemon
const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", fetchPokemon);


// Pokemon API info fetch
function fetchPokemon() {

  let pokeName = "dratini";
  let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;

  // Call the fetch function passing the url of the API as a parameter
  fetch(url)
    // Transform the data into json
    .then(function (response) {
      return response.json();
    })
    // Your code for handling the data you get from the API
    .then(function (results) {
      console.log(results.name);

      // Links up Pokemon name display
      let displayName = document.getElementById("displayName");
      displayName.innerHTML = `${results.name.toUpperCase()}`;

      // Links up Pokemon ID for sprite display
      document.getElementById("displaySprite").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${results.id}.png`;
    });

};