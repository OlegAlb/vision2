import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { FavoritesMainScreen } from '../../screens/tabs/favorites/FavoritesMainScreen';

import { Screens } from '../consts/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={Screens.FAVORITES_MAIN}
        component={FavoritesMainScreen}
      />
    </Stack.Navigator>
  );
};
