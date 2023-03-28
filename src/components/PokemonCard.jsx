
function PokemonCard () {
  const pokemon = pokemonList[0];
  return (
    <div>
      {pokemon.name === "bulbasaur" ? (
        <figure>
        <img src={pokemon.imgSrc} alt={pokemon.name} />
        </figure> 
      ) : (<p> ???</p>)
      } 
    </div>
    );
};

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

export default PokemonCard;



