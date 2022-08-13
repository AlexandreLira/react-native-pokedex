import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/Home';
import { Favorites } from '../screens/Favorites';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Seus favoritos'
        }}
      />
    </Navigator>
  )
}