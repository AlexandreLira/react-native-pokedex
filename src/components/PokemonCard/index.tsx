import React from "react";

import theme from "../../styles/theme";
import {
  Container,
  Header,
  ImageContainer,
  PokemonImage,
  PokemonName,
  SaveButton
} from "./styles";
import { PokemonTypes } from "../PokemonTypes";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { usePokemons } from "../../hooks/usePokemons";
import { PokemonDTO } from "../../dtos/PokemonDTO";
import { pokemonImageNotFound } from "../../utils/constant";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from 'react-navigation-shared-element';

interface PokemonCardProps {
  data: PokemonDTO;
}

export function PokemonCard({ data }: PokemonCardProps) {

  const { saveOrUnsalvePokemon, savedPokemons } = usePokemons()
  const { colors: { red, gray } } = theme
  const navigation = useNavigation()

  return (
    <Container key={data.id}>

      <Header>
        <PokemonName>{data.name.replace('-', ' ')}</PokemonName>
        <SaveButton onPress={() => saveOrUnsalvePokemon(data.id)}>
          <MaterialCommunityIcons
            name="pokeball"
            size={25}
            color={savedPokemons.includes(data.id) ? red : gray}
          />
        </SaveButton>
      </Header>

      <ImageContainer onPress={() => navigation.navigate('Details', { data })}>
        <SharedElement id={String(data.id)}>
          <PokemonImage
            style={{ resizeMode: 'contain' }}
            source={{ uri: data.sprites.other.home.front_default || pokemonImageNotFound }}
          />
        </SharedElement>

      </ImageContainer>
      <PokemonTypes types={data.types.map(item => item.type.name)} key={data.name} />


    </Container>

  )
}