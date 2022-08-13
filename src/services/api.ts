import { PokemonDTO, PokemonsDTO } from "../dtos/PokemonDTO"


interface Pokemons {
    limit: number;
    offset: number
}
 
export const searchPokemon = async (id: number): Promise<PokemonDTO> => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const response = await fetch(url)
        const data = response.json()
        return data
    } catch (error) {
        console.warn(error)
        return {} as PokemonDTO
    }
}

export const getAllPokemons = async (item: Pokemons): Promise<PokemonsDTO> =>  {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${item.limit}&offset=${item.offset}`
        const response = await fetch(url)
        const data = response.json()
        return data
    } catch (error) {
        console.warn(error)
        return {} as PokemonsDTO
    }
}
export const getPokemonData = async (url: string): Promise<PokemonDTO> => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.warn(error)
        return {} as PokemonDTO
    }
}