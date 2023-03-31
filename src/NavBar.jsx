    function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {
        return (
            
            <div className="pokemon-container">
                {pokemonList.map((element, pokemonIndex) => {
                const handleClickButton = () => {
                    setPokemonIndex(pokemonIndex);
                };
                return (
                    <button key={element.name} onClick={handleClickButton}>
                        {element.name}
                    </button>
                    
                    
                );
                })}
            </div>
            
        );
        }
    // const handlePrevClick = () => {setPokemonIndex( pokemonIndex- 1);};
   
    // const handleNextClick = () => {setPokemonIndex(pokemonIndex + 1);};

    // if (pokemonIndex === 3) {
    //     setTimeout(() => {  
    //         alert("pika pikachu !!!")
    //          }, 200);
    //          }
    //          []
    
   
    // return ( 
    //       <div className='buttons-container'>
    //       {pokemonIndex > 0 ? <button onClick={handlePrevClick}>Back</button> : null}
    //       {pokemonIndex < pokemonList.length - 1 ? <button className="button" onClick={handleNextClick}>Next</button> : null}
    //       </div>
    //       ) 
    //      }
    export default NavBar