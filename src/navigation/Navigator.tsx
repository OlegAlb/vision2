import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Navigation from '../base/Navigation';
import { Stacks } from './consts/stacks';
import AuthStack from './stacks/AuthStack';
import SplashStack from './stacks/SplashStack';
import TabNavigator from './tabs/Tabs';

const Stack = createStackNavigator();

const Navigator = () => {

  const handleNavigationReady = () => {
    Navigation.runActionQueue();
  }

  return (
    <NavigationContainer ref={Navigation.navigationRef} onReady={handleNavigationReady}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Stacks.SPLASH_STACK} component={SplashStack} />
        <Stack.Screen name={Stacks.AUTH_STACK} component={AuthStack} />
        <Stack.Screen name={Stacks.MAIN_STACK} component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
