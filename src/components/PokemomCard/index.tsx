import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import theme from "../../styles/theme";
import { Container, Header, PokemonImage, PokemonName, SaveButton } from "./styles";
import { PokemonTypes } from "../PokemomTypes";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function PokemonCard({ data }) {
  const [saved, setSaved] = useState<Boolean>(false)
  const { colors: { red, gray } } = theme
  const notFoundUrl = 'https://camo.githubusercontent.com/5d1fe59c3f0e4cfb5480bb8d8b1eb3ba58906acef846904fde8afcc5f773adbb/68747470733a2f2f692e696d6775722e636f6d2f583962314b75362e706e67'
  return (
    <Container>
      <Header>
        <PokemonName>{data.name}</PokemonName>
        <SaveButton onPress={() => setSaved(state => !state)}>
          {/* <AntDesign name="heart" size={20} color={saved ? red : gray} /> */}
          <MaterialCommunityIcons name="pokeball" size={25} color={saved ? red : gray} />
        </SaveButton>
      </Header>

      <PokemonImage
        style={{resizeMode: 'contain'}}
        source={{ uri: data.sprites.other.home.front_default || notFoundUrl }}
      />
      <PokemonTypes types={data.types.map(item =>item.type.name)} key={data.name}/>
     

    </Container>

  )
}