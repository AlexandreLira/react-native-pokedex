import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import { PokemonDTO } from '../../dtos/PokemonDTO';
import { usePokemons } from '../../hooks/usePokemons';
import {
  Ability,
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

import {
  PokemonTypes,
  Stats
} from '../../@share/components'

import theme from "../../styles/theme";
import { pokemonImageNotFound } from '../../utils/constant';
import { ScrollView } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';


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
      <ScrollView>

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
              color={savedPokemons.includes(data.id) ? colors.red : colors.gray_dark}
            />
          </Button>
        </Header>

        <NameContent>
          <PokemonName>{data.name.replace('-', ' ')}</PokemonName>
          <PokemonId>#{String(data.id).padStart(3, '0')}</PokemonId>
        </NameContent>

        <ImageContent>
          <PokemonTypes types={data.types.map(item => item.type.name)} key={data.name} />
          <SharedElement id={String(data.id)} style={{zIndex: 99}}>
            <PokemonImage
              style={{ resizeMode: 'contain' }}
              source={{ uri: data.sprites.other.home.front_default || pokemonImageNotFound }}
            />

          </SharedElement>
        </ImageContent>

        <InformationContent>
          <Title>Base STATS</Title>

          {data.stats.map(item => (
            <Stats
              key={item.stat.name}
              stats={item}
              color={color}
            />

          ))}

          <Title>Abilities</Title>

          {data.abilities.map(item => (
            <Ability key={item.ability.name}>{item.ability.name}</Ability>
          ))}

        </InformationContent>



      </ScrollView>
    </Container>
  )
}