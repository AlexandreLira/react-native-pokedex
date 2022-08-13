import React, {
    createContext,
    useContext,
    useState,
    ReactNode
} from "react";

interface PokemonsProviderProps {
    children: ReactNode;
}

interface PokemonsContextData {
    savedPokemons: number[],
    saveOrUnsalvePokemon: (id: number) => void
}

export const PokemonsContext = createContext({} as PokemonsContextData);

export function PokemonsProvider({ children }: PokemonsProviderProps) {
    const [savedPokemons, setSavedPokemons] = useState<number[]>([])

    function saveOrUnsalvePokemon(id: number) {
        if(savedPokemons.includes(id)){
            setSavedPokemons(state => state.filter(item => item !== id))
            return
        }

        setSavedPokemons(state => [...state, id])

    }

    return (
        <PokemonsContext.Provider value={{ savedPokemons, saveOrUnsalvePokemon }}>
            {children}
        </PokemonsContext.Provider>
    )
}
export function usePokemons() {
    const context = useContext(PokemonsContext)
    return context
}