import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { ImageBackground, Keyboard, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import changeNavigationBarColor from 'react-native-navigation-bar-color';

import Navigation from '../../base/Navigation';
import { Button, ButtonColor } from '../../components/Button';
import { Input } from '../../components/Input';
import { Ag, Text } from '../../components/Text';
import FormValidationHelper from '../../helpers/FormValidationHelper';
import { useRootStore } from '../../hooks/useRootStore';
import { AuthFormFields } from '../../modules/auth/forms/AuthForm';
import { Screens } from '../../navigation/consts/screens';
import { Colors } from '../../styles/Colors';

export const AuthStartScreen = observer(() => {
  const { authStore } = useRootStore();

  const backgroundImage = require('../../assets/images/guy.png');

  useEffect(() => {
    changeNavigationBarColor(Colors.black);
  }, [])

  const isValid = () => {
    return (
      FormValidationHelper.isRequired(authStore.authForm.phone) && 
      FormValidationHelper.isPhoneValid(authStore.authForm.phone)
    )
  }

  const handleChangePhone = (phone: string) => {
    authStore.changeAuthForm(AuthFormFields.phone, phone)
  }

  const handleLoginPress = () => {
    Navigation.navigate(Screens.AUTH_CODE, { phone: authStore.authForm.phone });
  }

  const handleRegisterPress = () => {
    Navigation.navigate(Screens.AUTH_REGISTER_CRIDENTIALS);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={Colors.black} barStyle={'light-content'}/>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <LinearGradient colors={[Colors.black, Colors.sixtyPercentBlack, Colors.sixtyPercentBlack, Colors.black]} style={styles.linearGradient}>
            <Text ag={Ag.H1} color={Colors.lightGrey}>Войти{'\n'}в аккаунт</Text>
            <Input 
              containerStyle={styles.input}
              label='Ваш телефон'
              value={authStore.authForm.phone}
              onChangeText={handleChangePhone} 
              mask="+7 (999) 999 99 99"
              keyboardType="numeric"
            />
            <Button 
              style={styles.button}
              title={'Войти'}
              disabled={!isValid()}
              color={ButtonColor.Light} 
              onPress={handleLoginPress}
            />
            <TouchableOpacity style={styles.register} onPress={handleRegisterPress}>
              <Text ag={Ag.Body3} color={Colors.lightGrey}>Нет акакунта? </Text>
              <Text ag={Ag.Body3Bold} color={Colors.lightGrey}>Регистрация</Text>
            </TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 34,
    paddingVertical: 60
  },
  input: {
    marginTop: 50,  
  },
  button: {
    marginTop: 20
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto'
  }
});
