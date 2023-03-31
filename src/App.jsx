  import { useState } from 'react'
  import { useEffect } from 'react'
  import './App.css'
  import PokemonCard from './components/PokemonCard'
  import NavBar from './NavBar'
  import React from 'react'
 



  
  const pokemonList = [{
        name: "Bulbasaur",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        type: "grass",},
    
        {name: "Charmander",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        type: "fire",},
    
        {name: "Squirtle",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        type: "water",},
    
        {name: "Pikachu",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        type: "electric",},
    
        {name: "Mew",
        type: "unknown",},
        ];
   



  function App() {
  
        const [pokemonIndex, setPokemonIndex] = useState(0);

        useEffect (
         () => { 
         setTimeout(() => {  
         alert("hello pokemon trainer :)")
          }, 400);
          }, 
          []
        );
         
        return( 
         <div className='pokedex'>
         <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
         <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
         </div>
        )  
      }
    
  export default App

