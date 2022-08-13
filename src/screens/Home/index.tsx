import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getAllPokemons, getPokemonData } from '../../services/api';
import { Container, List, PaginationContainer } from './styles';
import { PokemonDTO } from '../../dtos/PokemonDTO';

import {
  PaginationPickerSelect, 
  PokemonCard,
  Header,
  Button
} from '../../@share/components'

export function Home() {
  const [pokemons, setPokemons] = useState<PokemonDTO[]>([])
  
  const [loading, setLoading] = useState<boolean>(false)
  const [previusLoading, setPreviusLoading] = useState<boolean>(false)
  const [nextLoading, setNextLoading] = useState<boolean>(false)
  const [pageSelectLoading, setPageSelectLoading] = useState<boolean>(false)
  
  const [offsetSeleted, setOffsetSeleted] = useState<number>(0)
  const [paginationPages, setPaginationPages] = useState<any>([])

  const limitOfPokemons = 10

  async function fetchPokemons(offset: number) {
    setLoading(true)
    try {
      const response = await getAllPokemons({ limit: limitOfPokemons, offset })
      if(!Boolean(paginationPages.length)) {
        calculatePagination(response.count)
      }
      const pokemonsPromises = response.results.map(async item => await getPokemonData(item.url))
      const pokemonDataList = await Promise.all(pokemonsPromises)
      setPokemons(pokemonDataList)
    } catch (error) {
      console.warn('fetch pokemons error: ', error)
    }

    setLoading(false)
  }



  function calculatePagination(amountPokemons: number){
    let count = 0
    let pages = []
    let index = 1
    let offset = 0
    while(count < amountPokemons) {
      const rest = amountPokemons - count 
      count += limitOfPokemons
      pages.push({
        id: index,
        offset
      })
    offset = rest < limitOfPokemons ? rest : count
      index++
    }
    setPaginationPages(pages)
  }

  async function handleGetNextPokemons() {
    setNextLoading(true)
    await fetchPokemons(offsetSeleted + limitOfPokemons)
    setOffsetSeleted(state => state + limitOfPokemons)
    setNextLoading(false)
  }

  async function handleGetPreviusPokemons() {
    setPreviusLoading(true)
    await fetchPokemons(offsetSeleted - limitOfPokemons)
    setOffsetSeleted(state => state - limitOfPokemons)
    setPreviusLoading(false)
  }

  async function handleChangePage(offset: number) {
    setPageSelectLoading(true)
    await fetchPokemons(offset)
    setOffsetSeleted(offset)
    setPageSelectLoading(false)
  }

  useEffect(() => {

    fetchPokemons(offsetSeleted)
  }, [])

  function Pagination() {
    return (
      <PaginationContainer>
        <Button
          onPress={handleGetPreviusPokemons}
          loading={previusLoading}
          disabled={Boolean(offsetSeleted == 0)}
        >
          Anterior
        </Button>
        <PaginationPickerSelect 
          data={paginationPages}
          selectedValue={offsetSeleted}
          handleChangePage={handleChangePage}
          loading={pageSelectLoading}
        />
        <Button
          onPress={handleGetNextPokemons}
          loading={nextLoading}
          disabled={Boolean(pokemons.length < limitOfPokemons)}
        >
          Próximo
        </Button>

      </PaginationContainer>
    )
  }

  return (
    <Container>
      <Header/>
      <List
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        data={pokemons}
        renderItem={({ item }) => <PokemonCard data={item} />}
        keyExtractor={(_, index) => String(index)}
        ListFooterComponent={() => <Pagination/>}
      />
    </Container>
  );
}

