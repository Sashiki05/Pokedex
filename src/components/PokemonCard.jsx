import PropTypes from "prop-types";
import colors from "../Type";

function PokemonCard ({ pokemon })  {

  return (
    <figure className="card" style={{backgroundColor : colors[pokemon.type]}}>
        {pokemon.imgSrc == undefined  ? 
        <p> ???</p> 
        :
        (
        <>
        <img src={pokemon.imgSrc} alt={pokemon.name} />
        </> ) 
      } 
    </figure>
    );}

    PokemonCard.propTypes = {
      pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
      })
    };

export default PokemonCard;



