import axios from "axios"

export const getPokemonList = () => {
    return (
        axios.get("https://pokeapi.co/api/v2/pokemon/")
    );
}

export const searchPokemon = (search) => {
    return (
        axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
    );
}
