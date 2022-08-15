import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';


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

    async function saveOrUnsalvePokemon(id: number) {
        if(savedPokemons.includes(id)){
            const filter = savedPokemons.filter(item => item !== id)
            await AsyncStorage.setItem('@savedPokemons', JSON.stringify(filter))
            setSavedPokemons(filter)
            return
        }
        const filter = [...savedPokemons, id]
        await AsyncStorage.setItem('@savedPokemons', JSON.stringify(filter))
        setSavedPokemons(filter)

    }

    useEffect(() => {
        async function loadSavedPokemonsStorage(){
            const storage: any = await AsyncStorage.getItem('@savedPokemons')
            if(Boolean(storage)){
                const pokemonsId = JSON.parse(storage)
                setSavedPokemons(pokemonsId)
            }
        }
        loadSavedPokemonsStorage()
    }, [])

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