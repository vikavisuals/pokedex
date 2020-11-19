
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
  document.querySelectorAll('#superEffectiveTo').forEach(function (type) {
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

      // Links up Pokemon ID for sprite display
      let displaySprite = document.getElementById("displaySprite");
      displaySprite.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${results.id}.png`;

      // Loops through Pokemon type in case there is more than one
      for (let i = 0; i < results.types.length; i++) {

        // Links up Pokemon type for display, each type as individual Div
        let displayType = document.createElement('div');
        displayType.setAttribute('id', 'displayType');
        displaySprite.after(displayType);

        displayType.innerHTML += `${results.types[i].type.name.charAt(0).toUpperCase() + results.types[i].type.name.slice(1)}`;

        // API call to grab type info
        function fetchType() {

          let pokeType = document.getElementById("displayType").innerHTML;
          pokeType = pokeType.toLowerCase().trim();

          console.log(results.types[i].type.name);

          let url = `https://pokeapi.co/api/v2/type/${pokeType}/`;

          fetch(url)
            .then(function (response) {
              return response.json();
            })
            .then(function (results) {

              let damageTo = results.damage_relations.double_damage_to;
              let damageFrom = results.damage_relations.double_damage_from;

              // Loops through Pokemon types this type is Super Effective against
              for (let x = 0; x < damageTo.length; x++) {

                // Links up Pokemon type for display, each type as individual Div
                let superEffectiveTo = document.createElement('ol');
                let displayType = document.getElementById("displayType");
                superEffectiveTo.setAttribute('id', 'superEffectiveTo');
                displayType.appendChild(superEffectiveTo);

                superEffectiveTo.innerHTML += `${damageTo[x].name.charAt(0).toUpperCase() + damageTo[x].name.slice(1)}`;

                console.log(damageTo[x]);
                console.log(results);
              };

            })
            .catch(function (error) {
              console.log(error);
            });
        };
        fetchType();
      };
    })

    .catch(function (error) {
      console.log(error);
    });

};


