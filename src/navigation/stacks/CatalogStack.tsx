import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CatalogMainScreen } from '../../screens/tabs/catalog/CatalogMainScreen';

import { Screens } from '../consts/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={Screens.CATALOG_MAIN}
        component={CatalogMainScreen}
      />
    </Stack.Navigator>
  );
};
