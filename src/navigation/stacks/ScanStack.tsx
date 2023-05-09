import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ScanMainScreen } from '../../screens/tabs/scan/ScanMainScreen';

import { Screens } from '../consts/screens';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={Screens.SCAN_MAIN}
        component={ScanMainScreen}
      />
    </Stack.Navigator>
  );
};
