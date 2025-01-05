import React from "react";
import '../index.css'

export const PokemonCard = ({pokemonData}) => {
    return (
        <>
        <div className="card">
            <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name} />
            <h4 className="text-lg font-semibold capitalize mt-2 py-1 px-8 bg-blue-500 text-white rounded-2xl">{pokemonData.name}</h4>
            <div className="pokemon-type capitalize text-sm">
                {pokemonData.types.map((curr)=>{
                     return (curr.type.name)
                }).join(', ')}
            </div>
            <div className="pokemon-data">
                <p className="font-semibold">Height</p>
                <p className="font-semibold">Weight</p>
                <p className="font-semibold">Speed</p>
                <p>{pokemonData.height}</p>
                <p>{pokemonData.weight}</p>
                <p>{pokemonData.stats[5].base_stat}</p>
            </div>
        </div>
        </>
    )
}