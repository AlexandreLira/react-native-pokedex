import React from "react";

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

export function Stats({stats, color}: StatsProps) {
  const percentage = (stats.base_stat * 100) / 200
  return (
    <Container>
      <Title color={color}>{stats.stat.name.replace('-', ' ')}</Title>
      <Number>{String(stats.base_stat).padStart(3, '0')}</Number>

      <BarContent>
        <EffortBar 
          color={color}
          width={percentage}
        />
      </BarContent>
    </Container>

  )
}