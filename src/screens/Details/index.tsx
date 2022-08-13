import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation, useRoute } from '@react-navigation/native';

import { PokemonDTO } from '../../dtos/PokemonDTO';
import { usePokemons } from '../../hooks/usePokemons';
import {
  Button,
  Container,
  Header,
  ImageContent,
  InformationContent,
  NameContent,
  PokemonId,
  PokemonImage,
  PokemonName,
  Title
} from './styles';

import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { PokemonTypes } from '../../components/PokemomTypes';
import theme from "../../styles/theme";
import { pokemonImageNotFound } from '../../utils/constant';
import { Stats } from '../../components/Stats';

interface Params {
  data: PokemonDTO
}

export function Details() {
  const route = useRoute()
  const navigation = useNavigation()
  const { saveOrUnsalvePokemon, savedPokemons } = usePokemons()

  const { data } = route.params as Params;
  const { colors } = theme
  const color = colors[data.types[0].type.name]

  return (
    <Container>
      <StatusBar
        style="auto"
        translucent={false}
        backgroundColor={colors.background_primary}
      />
      <Header>
        <Button onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </Button>
        <Button onPress={() => saveOrUnsalvePokemon(data.id)}>
          <MaterialCommunityIcons
            name="pokeball"
            size={30}
            color={savedPokemons.includes(data.id) ? colors.red : colors.normal}
          />
        </Button>
      </Header>

      <NameContent>
        <PokemonName>{data.name}</PokemonName>
        <PokemonId>#{String(data.id).padStart(3, '0')}</PokemonId>
      </NameContent>

      <ImageContent>
        <PokemonTypes types={data.types.map(item => item.type.name)} key={data.name} />
        <PokemonImage
          style={{ resizeMode: 'contain' }}
          source={{ uri: data.sprites.other.home.front_default || pokemonImageNotFound }}
        />
      </ImageContent>

      <InformationContent>
        <Title>STATS</Title>

        {data.stats.map(item => (
          <Stats
            key={item.stat.url}
            stats={item}
            color={color}
          />

        ))}
      </InformationContent>



    </Container>
  )
}