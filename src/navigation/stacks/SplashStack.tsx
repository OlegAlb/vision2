import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { SplashScreen } from '../../screens/splash/SplashScreen';
import { Screens } from '../consts/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screens.SPLASH_MAIN} component={SplashScreen} />
    </Stack.Navigator>
  );
};