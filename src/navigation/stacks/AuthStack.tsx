import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthCodeScreen } from '../../screens/auth/AuthCodeScreen';
import { AuthRegisterCridentialsScreen } from '../../screens/auth/AuthRegisterCridentialsScreen';
import { AuthRegisterProfileScreen } from '../../screens/auth/AuthRegisterProfileScreen';

import { AuthStartScreen } from '../../screens/auth/AuthStartScreen';
import { Screens } from '../consts/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screens.AUTH_START} component={AuthStartScreen}/>
      <Stack.Screen name={Screens.AUTH_CODE} component={AuthCodeScreen}/>
      <Stack.Screen name={Screens.AUTH_REGISTER_CRIDENTIALS} component={AuthRegisterCridentialsScreen}/>
      <Stack.Screen name={Screens.AUTH_REGISTER_PROFILE} component={AuthRegisterProfileScreen}/>
    </Stack.Navigator>
  );
};
