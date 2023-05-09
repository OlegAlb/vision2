import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ProfileMainScreen } from '../../screens/tabs/profile/ProfileMainScreen';

import { Screens } from '../consts/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={Screens.PROFILE_MAIN}
        component={ProfileMainScreen}
      />
    </Stack.Navigator>
  );
};
