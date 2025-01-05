import React, { useEffect, useState } from "react"
import '../index.css'
import { PokemonCard } from "./PokemonCard";


export const Pokemon= ()=> {

    const[pokemon,setPokemon] = useState([]);
    const[loading,setLoading] = useState(true);
    const[search,setSearch]= useState("");
     
    const API = "https://pokeapi.co/api/v2/pokemon?limit=100"
    const fetchPokemonData = async() => {
    try {   
        const data = await fetch(API);
        const response = await data.json();
        
        const pokemonDetails = response.results.map(async(curr)=>{
          const data = await fetch(curr.url);
          const response = await data.json();
          return response;
        })
  
        const pokemonResponse = await Promise.all(pokemonDetails);
        setLoading(false);
        setPokemon(pokemonResponse); 
        console.log(pokemonResponse);
    } catch (error) {
        console.log(error);
    }
}

useEffect(()=>{
    fetchPokemonData();
},[])

const searchPokemon = pokemon.filter((curr)=>{
   return curr.name.toLowerCase().includes(search.toLowerCase())
})

const loadingCard = [0,1,2,3,4,5,6,7]

console.log(searchPokemon);
    return(
        <>
        <h1 className="font-bold text-2xl text-center p-5">Let's Catch Pokemon</h1>
        <div className="search">
            <form>
            <input type="text" placeholder="Search Pokemon" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </form>
        </div>
        {loading && 
        // <div className="loading-screen w-full h-48 flex justify-center items-center">
        //     <p className="text-5xl text-center">Loading...</p>
        // </div>
<div className="w-full h-screen gap-5 p-10 m-4 justify-center items-center flex-wrap">
    
{loadingCard.map((curr)=>{
    return (
        <>
        <div className="h-30 w-48 bg-gray-200 p-4 rounded-lg animate-pulse">
  <div className="w-full h-28 bg-gray-300"></div>
  <div className="h-6 bg-gray-300 rounded mt-4 mx-8"></div>
  <div className="h-4 bg-gray-300 rounded mt-2 mx-8"></div>
  <div className="pokemon-data">
    <div className="h-4 bg-gray-300 rounded mt-2"></div>
    <div className="h-4 bg-gray-300 rounded mt-2"></div>
    <div className="h-4 bg-gray-300 rounded mt-2"></div>
  </div>
</div>
        </>
    )
})}
       

</div>
        }
        { !loading && 
        <div className="card-container">
            {searchPokemon.map((poke)=>{
                return <PokemonCard key={poke.id} pokemonData={poke}/>
            })}
        </div>
        }
        </>
    )
}
