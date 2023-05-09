import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import Navigation from '../../base/Navigation';
import { CatalogIcon } from '../../components/icons/CatalogIcon';
import { FavoritesIcon } from '../../components/icons/FavoritesIcon';
import { HangerIcon } from '../../components/icons/HangerIcon';
import { ProfileFemaleIcon } from '../../components/icons/ProfileFemaleIcon';
import { ProfileIcon } from '../../components/icons/ProfileIcon';
import { ProfileMaleIcon } from '../../components/icons/ProfileMaleIcon';
import { ScanIcon } from '../../components/icons/ScanIcon';
import { Text } from '../../components/Text';
import { useRootStore } from '../../hooks/useRootStore';
import { Colors } from '../../styles/Colors';
import { Screens } from '../consts/screens';
import { Tabs } from '../consts/tabs';
import CatalogStack from '../stacks/CatalogStack';
import FavoritesStack from '../stacks/FavoritesStack';
import LooksStack from '../stacks/LooksStack';
import ProfileStack from '../stacks/ProfileStack';
import ScanStack from '../stacks/ScanStack';

const Tab = createBottomTabNavigator();

const getTabBarVisible = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const hideOnScreens = [Screens.SCAN_MAIN];

  if (!routeName) {
    return 'flex';
  }

  return hideOnScreens.toString().includes(routeName) ? 'none' : 'flex';
};

export default () => {
  const { profileStore: { profile } } = useRootStore();

  useEffect(() => {
    changeNavigationBarColor(Colors.dark)
  }, [])

  return (
    <Tab.Navigator 
      initialRouteName={Navigation.initialRoute}
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => <View style={styles.tabBarStyle}/>,
      }}
    >
      <Tab.Screen
        name={Tabs.TAB_SCAN}
        component={ScanStack}
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => <Text fontSize={12} color={focused ? Colors.white : Colors.darkGrey}>скан</Text>,
          tabBarIcon: ({ focused }) => <ScanIcon size={36} color={focused ? Colors.white : Colors.darkGrey}/>,
          tabBarStyle: { display: getTabBarVisible(route) },
        })}
      />

      <Tab.Screen
        name={Tabs.TAB_CATALOG}
        component={CatalogStack}
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => <Text fontSize={12} color={focused ? Colors.white : Colors.darkGrey}>каталог</Text>,
          tabBarIcon: ({ focused }) => <CatalogIcon size={36} color={focused ? Colors.white : Colors.darkGrey} />,
          tabBarStyle: { display: getTabBarVisible(route) },
        })}
      />

      <Tab.Screen
        name={Tabs.TAB_LOOKS}
        component={LooksStack}
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => <Text fontSize={12} color={focused ? Colors.white : Colors.darkGrey}>образы</Text>,
          tabBarIcon: ({ focused }) => <HangerIcon size={36} color={focused ? Colors.white : Colors.darkGrey}/>,
          tabBarStyle: { display: getTabBarVisible(route) },
        })}
      />

      <Tab.Screen
        name={Tabs.TAB_FAVORITES}
        component={FavoritesStack}
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => <Text fontSize={12} color={focused ? Colors.white : Colors.darkGrey}>избранное</Text>,
          tabBarIcon: ({ focused }) => <FavoritesIcon size={36} color={focused ? Colors.white : Colors.darkGrey} />,
          tabBarStyle: { display: getTabBarVisible(route) },
        })}
      />

      <Tab.Screen
        name={Tabs.TAB_PROFILE}
        component={ProfileStack}
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => <Text fontSize={12} color={focused ? Colors.white : Colors.darkGrey}>профиль</Text>,
          tabBarIcon: ({ focused }) => profile ? (profile.gender === 'male' ? <ProfileMaleIcon size={36} color={focused ? Colors.white : Colors.darkGrey}/> : <ProfileFemaleIcon size={36} color={focused ? Colors.white : Colors.darkGrey}/>) : <ProfileIcon size={36} color={focused ? Colors.white : Colors.darkGrey}/>,
          tabBarStyle: { display: getTabBarVisible(route) },
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.dark,
    ...StyleSheet.absoluteFillObject
  }
})