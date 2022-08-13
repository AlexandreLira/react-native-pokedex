import React, { useEffect, useState } from "react";

import theme from "../../styles/theme";
import { Container, Header, PokemonImage, PokemonName, SaveButton } from "./styles";
import { PokemonTypes } from "../PokemomTypes";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { usePokemons } from "../../hooks/usePokemons";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import { pokemonImageNotFound } from "../../utils/constant";

interface PokemonCardProps {
  data: PokemonDTO;
}

export function PokemonCard({ data }: PokemonCardProps) {

  const { saveOrUnsalvePokemon, savedPokemons } = usePokemons()
  const { colors: { red, gray } } = theme
  

  return (
    <Container key={data.id}>
      <Header>
        <PokemonName>{data.name}</PokemonName>
        <SaveButton onPress={() => saveOrUnsalvePokemon(data.id)}>
          <MaterialCommunityIcons 
            name="pokeball" 
            size={25} 
            color={savedPokemons.includes(data.id) ? red : gray} 
          />
        </SaveButton>
      </Header>

      <PokemonImage
        style={{resizeMode: 'contain'}}
        source={{ uri: data.sprites.other.home.front_default || pokemonImageNotFound }}
      />
      <PokemonTypes types={data.types.map(item =>item.type.name)} key={data.name}/>
     

    </Container>

  )
}