import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { 
  Home, 
  Details, 
  Favorites
} from '../@share/screens';

const { Navigator, Screen } = createSharedElementStackNavigator();

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
          title: 'My favorites'
        }}
      />

      <Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false
        }}
        sharedElements={(route, otherRoute, showing) => {
          const { data } = route.params;
          return [String(data.id)];
        }}
      />
    </Navigator>
  )
}