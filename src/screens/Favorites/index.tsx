import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { PokemonCard } from '../../components/PokemomCard';
import { searchPokemon } from '../../services/api';
import { Container, List } from '../Favorites/styles';
import { PokemonDTO } from '../../dtos/PokemonDTO';
import { usePokemons } from '../../hooks/usePokemons'

export function Favorites() {
  const [pokemons, setPokemons] = useState<PokemonDTO[]>([])
  
  const [loading, setLoading] = useState<boolean>(false)
  

  const {savedPokemons} = usePokemons()


  async function fetchPokemons() {
    setLoading(true)
    try {
      const pokemonsPromises = savedPokemons.map(async item => await searchPokemon(item))
      const pokemonDataList = await Promise.all(pokemonsPromises)
      setPokemons(pokemonDataList)
    } catch (error) {
      console.warn('fetch pokemons error: ', error)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchPokemons()
  }, [savedPokemons])

  return (
    <Container>
      <List
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        data={pokemons}
        renderItem={({ item }) => <PokemonCard data={item} />}
        keyExtractor={(_, index) => String(index)}
      />
    </Container>
  );
}

