
// Keeps page from refreshing after form submit
let searchForm = document.getElementById("searchForm");
searchForm.addEventListener('submit', handleSearchForm);
function handleSearchForm(event) {
  event.preventDefault();
}

// Button that searches for a pokemon
const searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", fetchPokemon);
searchBtn.addEventListener("click", resetSearchInfo);

// Resets displayed info after search button is hit
function resetSearchInfo() {
  document.getElementById("displayName").innerHTML = "";
  document.getElementById("displaySprite").src = "./images/pokeball.png";
  document.getElementById("searchBar").value = "";
  document.querySelectorAll('#displayType').forEach(function (type) {
    return type.remove();
  });
}

// Pokemon API info fetch
function fetchPokemon() {

  // Grabs search bar info and inserts it into API
  let searchName = document.getElementById("searchBar").value;
  let pokeName = searchName.toLowerCase();

  let url = `https://pokeapi.co/api/v2/pokemon/${pokeName}/`;

  // Call the fetch function passing the url of the API as a parameter
  fetch(url)
    // Transform the data into json
    .then(function (response) {
      return response.json();
    })

    // Your code for handling the data you get from the API
    .then(function (results) {
      console.log(results);

      // Links up Pokemon name display
      let displayName = document.getElementById("displayName");
      displayName.innerHTML = `${results.name.charAt(0).toUpperCase() + results.name.slice(1)}`;

      // Loops through Pokemon type in case there is more than one
      for (let i = 0; i < results.types.length; i++) {

        // Links up Pokemon type for display
        let displayType = document.createElement('div');
        displayType.setAttribute('id', 'displayType');
        displayName.appendChild(displayType);

        displayType.innerHTML += ` ${results.types[i].type.name.charAt(0).toUpperCase() + results.types[i].type.name.slice(1)} `;

        console.log(results.types[i].type.name);
      };

      // Links up Pokemon ID for sprite display
      document.getElementById("displaySprite").src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${results.id}.png`;
    })

    .catch(function (error) {
      console.log(error);
    });

};