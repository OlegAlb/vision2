import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import Navigation from '../../base/Navigation';
import { Ag, Text } from '../../components/Text';
import { useRootStore } from '../../hooks/useRootStore';
import { Screens } from '../../navigation/consts/screens';
import { Stacks } from '../../navigation/consts/stacks';
import { Colors } from '../../styles/Colors';

export const SplashScreen = observer(() => {
  const { authStore } = useRootStore();

  useEffect(() => {
    authStore.checkAuth();

    changeNavigationBarColor(Colors.lightGrey)
    
    const delay = setTimeout(() => {
      Navigation.addActionQueue(() => Navigation.replace(Stacks.MAIN_STACK, { screen: Screens.MAIN_APP }));
      Navigation.runActionQueue();
    }, 1000);

    return () => clearTimeout(delay);
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.lightGrey} barStyle={'dark-content'} />
      <Text ag={Ag.H1} color={Colors.dark}>VISION</Text>
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
