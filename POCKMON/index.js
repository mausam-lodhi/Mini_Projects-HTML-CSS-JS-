function fetchdata() {
  const pokemon = document
    .getElementById("input_pokemon")
    .value.toLowerCase()
    .trim();
  
  if (!pokemon) {
    alert("Please enter a Pokemon name");
    return;
  }
  
  const imgElement = document.getElementById("pokemon_img");
  
  // Show loading state
  imgElement.src = "";
  imgElement.alt = "Loading...";
  imgElement.style.display = "block";
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Pokemon not found (${response.status})`);
      }
      return response.json();
    })
    .then(data => {
      imgElement.src = data.sprites.front_default;
      imgElement.alt = `${pokemon} image`;
    })
    .catch(error => {
      console.error("Error fetching Pokemon:", error);
      imgElement.style.display = "none";
      alert(`Failed to fetch Pokemon: ${error.message}`);
    });
}
