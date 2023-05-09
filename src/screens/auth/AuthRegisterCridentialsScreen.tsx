import { observer } from 'mobx-react-lite';
import React from 'react';
import { ImageBackground, Keyboard, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

import Navigation from '../../base/Navigation';
import { Button, ButtonColor } from '../../components/Button';
import { Input } from '../../components/Input';
import { Ag, Text } from '../../components/Text';
import FormValidationHelper from '../../helpers/FormValidationHelper';
import { useRootStore } from '../../hooks/useRootStore';
import { RegisterFormFields } from '../../modules/auth/forms/RegisterForm';
import { Screens } from '../../navigation/consts/screens';
import { Colors } from '../../styles/Colors';

export const AuthRegisterCridentialsScreen = observer(() => {
  const { authStore } = useRootStore();

  const backgroundImage = require('../../assets/images/girl.png');

  const isValid = () => {
    return (
      FormValidationHelper.isRequired(authStore.registerForm.name) && 
      FormValidationHelper.isRequired(authStore.registerForm.phone) && 
      FormValidationHelper.isPhoneValid(authStore.registerForm.phone)
    )
  }

  const handleChangePhone = (phone: string) => {
    authStore.changeRegisterForm(RegisterFormFields.phone, phone)
  }

  const handleChangeName = (name: string) => {
    authStore.changeRegisterForm(RegisterFormFields.name, name)
  }

  const handleNextPress = () => {
    Navigation.navigate(Screens.AUTH_REGISTER_PROFILE);
  }

  const handleLoginPress = () => {
    Navigation.navigate(Screens.AUTH_START);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={Colors.black} barStyle={'light-content'}/>
        <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
          <LinearGradient colors={[Colors.black, Colors.sixtyPercentBlack, Colors.sixtyPercentBlack, Colors.black]} style={styles.linearGradient}>
            <Text ag={Ag.H1} color={Colors.lightGrey}>Создать новый аккаунт</Text>
            <Input 
              containerStyle={styles.input}
              label="Ваше имя"
              value={authStore.registerForm.name}
              onChangeText={handleChangeName} 
            />
            <Input 
              containerStyle={styles.input}
              label="Ваш телефон"
              value={authStore.registerForm.phone}
              onChangeText={handleChangePhone} 
              mask="+7 (999) 999 99 99"
              keyboardType="numeric"
            />
            <Button 
              title="Далее"
              style={styles.button}
              disabled={!isValid()}
              color={ButtonColor.Light} 
              onPress={handleNextPress}
            />
            <TouchableOpacity style={styles.login} onPress={handleLoginPress}>
              <Text ag={Ag.Body3} color={Colors.lightGrey}>Уже есть аккаунт? </Text>
              <Text ag={Ag.Body3Bold} color={Colors.lightGrey}>Войти</Text>
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
  genderSwitch: {
    marginTop: 50
  },
  label: {
    color: Colors.lightGrey
  },
  input: {
    marginTop: 50
  },
  button: {
    marginTop: 50
  },
  login: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto'
  }
});
