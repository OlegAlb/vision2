import { observer } from 'mobx-react-lite';
import React, { useEffect, useState } from 'react';
import { Keyboard, SafeAreaView, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Navigation from '../../base/Navigation';
import { Nullable } from '../../base/types/BaseTypes';
import { Button, ButtonColor } from '../../components/Button';
import { CodeInput } from '../../components/CodeInput';
import { Header } from '../../components/Header';
import { Ag, Align, Text } from '../../components/Text';
import { useRootStore } from '../../hooks/useRootStore';
import { ConfirmFormFields } from '../../modules/auth/forms/ConfirmForm';
import { Stacks } from '../../navigation/consts/stacks';
import { AuthCodeRouteProps } from '../../navigation/types/AuthStackTypes';
import { Colors } from '../../styles/Colors';
import UpdateProfileDto from '../../modules/profile/dto/UpdateProfileDto';
import { Profile } from '../../modules/profile/models/Profile';

export const AuthCodeScreen = observer(() => {
  const { authStore, profileStore } = useRootStore();

  const { params: { phone, isRegister } } = useRoute<AuthCodeRouteProps>();
  
  const insets = useSafeAreaInsets();

  const [confirm, setConfirm] = useState<Nullable<FirebaseAuthTypes.ConfirmationResult>>(null);

  useEffect(() => {
    const init = async () => {
      authStore.changeConfirmForm(ConfirmFormFields.phone, phone);

      if(authStore){
        setConfirm(await authStore.loginWithPhoneNumber(authStore.confirmForm.phone));
      }
    }

    const subscriber = authStore.handleAuthStateChanged(user => {
      if(user){
        authStore.setAuthUser(user);
        authStore.resetAuthForm();

        if(isRegister){
          authStore.updateProfile();
          authStore.register(user.uid);
        }

        Navigation.replace(Stacks.MAIN_STACK)
      }
    });

    init();

    return subscriber;
  }, [phone])

  const handleSubmitPress = async () => {
    await confirm?.confirm(authStore.confirmForm.code);
  }

  const handleCodeChange = (code: string) => {
    authStore.changeConfirmForm(ConfirmFormFields.code, code)
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={{ flex: 1, paddingTop: insets.top }}>
        <StatusBar backgroundColor={Colors.lightGrey} barStyle={'dark-content'}/>
        <Header showBack style={styles.header}/>
        <View style={styles.container}>
          <Text ag={Ag.H3} align={Align.Center} color={Colors.dark}>Код подтверждения</Text>
          <Text ag={Ag.Body2} align={Align.Center} color={Colors.darkGrey}>Введите код из СМС</Text>
          <CodeInput
            style={styles.code}
            maxLength={6}
            value={authStore.confirmForm.code}
            onChangeText={handleCodeChange}
          />
          <Button 
            title={'Подтвердить'}
            color={ButtonColor.Dark} 
            onPress={handleSubmitPress}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    paddingHorizontal: 34,
    paddingTop: 96
  },
  header: {
    backgroundColor: Colors.lightGrey
  },
  code: {
    marginTop: 45,
    marginBottom: 45
  }
});
