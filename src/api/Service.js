import axios from "axios"

export const getPokemonList = (offset,limit) => {
    return (
        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    );
}

export const searchPokemon = (search) => {
    return (
        axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
    );
}
