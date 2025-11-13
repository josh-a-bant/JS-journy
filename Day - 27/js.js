// https://pokeapi.co/api/v2/pokemon/pikachu? - API

async function getPokemonDetail() {
  const pokemonName = document.getElementById("pokemonName").value;

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("enter valid name");
    }

    const data = await response.json();
    const pokemonImage = document.getElementById("pokemonImage");

    const pokemonimg = data.sprites.front_default;

    pokemonImage.src = pokemonimg;
    pokemonImage.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}
