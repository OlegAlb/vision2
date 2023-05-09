import { observer } from 'mobx-react-lite';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Navigation from '../../../base/Navigation';
import { Button } from '../../../components/Button';
import { DocIcon } from '../../../components/icons/DocIcon';
import { HelpIcon } from '../../../components/icons/HelpIcon';
import { InfoIcon } from '../../../components/icons/InfoIcon';
import { Ag, Text } from '../../../components/Text';
import { useRootStore } from '../../../hooks/useRootStore';
import { Stacks } from '../../../navigation/consts/stacks';
import { Colors } from '../../../styles/Colors';

interface ProfileMainProps {}

export const ProfileMainScreen = observer(({}: ProfileMainProps) => {
  const insets = useSafeAreaInsets();
  const { authStore, profileStore: { profile }} = useRootStore();

  const handleLoginPress = () => {
    Navigation.navigate(Stacks.AUTH_STACK)
  }

  const handleLogoutPress = () => authStore.logout();

  const handleSupportPress = () => {

  }

  const handleInfoPress = () => {

  }

  const handlePoliticsPress = () => {

  }

  return (
    <ScrollView
      contentContainerStyle={[styles.container, {
        paddingTop: insets.top + 60,
        paddingBottom: insets.bottom + 60,
      }]}
    >
      <StatusBar backgroundColor={Colors.lightGrey} barStyle={'dark-content'}/>
      {!!authStore.authUser ? (
         <Button title={'Выйти'} onPress={handleLogoutPress}/>
      ): (
      <>
        <View style={styles.headSection}>
          <Text ag={Ag.H2}>Здравствуйте</Text>
          <Text ag={Ag.Body2} style={styles.subtitle}>Экспериментируйте со стилями и подбирайте идеальные образы с учетом ваших персональных параметров</Text>
          <Button title={'Войти'} onPress={handleLoginPress}/>
        </View>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.menuItem} onPress={handleSupportPress}>
            <HelpIcon size={20} color={Colors.dark}/>
            <Text ag={Ag.Body2} style={styles.menuItemTitle}>Поддержка</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleInfoPress}>
            <InfoIcon size={20} color={Colors.dark}/>
            <Text ag={Ag.Body2} style={styles.menuItemTitle}>О приложении</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handlePoliticsPress}>
            <DocIcon size={20} color={Colors.dark}/>
            <Text ag={Ag.Body2} style={styles.menuItemTitle}>Политика конфиденциальности</Text>
          </TouchableOpacity>
        </View>
      </>
      )}
    </ScrollView>
  );
});

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Colors.lightGrey
  },
  subtitle: {
    marginTop: 15,
    marginBottom: 35
  },
  headSection: {
    paddingHorizontal: 34
  },
  menu:{
    marginTop: 35,
  },
  menuItem: {
    paddingHorizontal: 34,
    backgroundColor: Colors.white,
    paddingVertical: 20,
    marginBottom: 3,
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuItemTitle: {
    marginLeft: 10
  }
});
