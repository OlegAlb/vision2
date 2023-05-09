import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LooksMainScreen } from '../../screens/tabs/looks/LooksMainScreen';

import { Screens } from '../consts/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={Screens.LOOKS_MAIN}
        component={LooksMainScreen}
      />
    </Stack.Navigator>
  );
};
