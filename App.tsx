import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { PokemonsProvider } from './src/hooks/usePokemons';
import { Routes } from './src/routes';
import { Home } from './src/screens/Home';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        style="auto"
        translucent={false}
        backgroundColor={theme.colors.background_primary}
      />
      <PokemonsProvider>
        <Routes/>
      </PokemonsProvider>
    </ThemeProvider>
  );
}

