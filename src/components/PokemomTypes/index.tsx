import React from 'react';
import { Text, View } from 'react-native';
import theme from '../../styles/theme';

interface PokemonTypesProps {
  types: string[]
}

export function PokemonTypes({ types }: PokemonTypesProps) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {types.map((type, index) =>
        <Text
        key={index.toString()}
          style={{
            textTransform: 'uppercase',
            fontWeight: 'bold',
            marginRight: 10,
            fontSize: 10,
            color: theme.colors[type]
          }}>
          {type}
        </Text>)}
    </View>
  )
}