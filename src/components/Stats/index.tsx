import React, { useState } from "react";
import { Animated, LayoutChangeEvent } from "react-native";

import {
  BarContent,
  Container,
  EffortBar,
  Number,
  Title
} from "./styles";

interface StatsProps {
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    }
  },
  color: string
}

export function Stats({ stats, color }: StatsProps) {
  const [width, setWidth] = useState(new Animated.Value(0))
  const [porcetange, setPorcetange] = useState(0)


  Animated.timing(width, {
    toValue: porcetange,
    duration: 1000,
    useNativeDriver: false
  }).start()

  return (
    <Container>
      <Title color={color}>{stats.stat.name.replace('-', ' ')}</Title>
      <Number>{String(stats.base_stat).padStart(3, '0')}</Number>

      <BarContent
        onLayout={(e: LayoutChangeEvent) => {
          const newWidth = e.nativeEvent.layout.width;
          setPorcetange((stats.base_stat * newWidth) / 200)
        }}
      >
        <EffortBar
          style={{
            width: width
          }}
          color={color}
        />
      </BarContent>
    </Container>

  )
}