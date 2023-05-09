import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { ImageBackground, Keyboard, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

import Navigation from '../../base/Navigation';
import { AlertModal } from '../../components/AlertModal';
import { Button, ButtonColor } from '../../components/Button';
import { ButtonSwitch } from '../../components/ButtonSwitch';
import { IconButton } from '../../components/IconButton';
import { QuestionIcon } from '../../components/icons/QuestionIcon';
import { Input } from '../../components/Input';
import { Ag, Text } from '../../components/Text';
import FormValidationHelper from '../../helpers/FormValidationHelper';
import { useRootStore } from '../../hooks/useRootStore';
import { RegisterFormFields } from '../../modules/auth/forms/RegisterForm';
import { Gender } from '../../modules/auth/types/authTypes';
import { Screens } from '../../navigation/consts/screens';
import { Colors } from '../../styles/Colors';

export const AuthRegisterProfileScreen = observer(() => {
  const { authStore } = useRootStore();

  const [ageModalVisible, setAgeModalVisible] = useState<boolean>(false);
  const [heightModalVisible, setHeightModalVisible] = useState<boolean>(false);

  const backgroundImage = require('../../assets/images/girl.png');

  const isValid = () => {
    return (
      FormValidationHelper.isRequired(authStore.registerForm.name) && 
      FormValidationHelper.isRequired(authStore.registerForm.phone) && 
      FormValidationHelper.isPhoneValid(authStore.registerForm.phone)
    )
  }

  const handleChangeHeight = (height: string) => {
    authStore.changeRegisterForm(RegisterFormFields.height, height)
  }

  const handleChangeAge = (age: string) => {
    authStore.changeRegisterForm(RegisterFormFields.age, age)
  }

  const handleGenderSelect = (gender: Gender) => {
    authStore.changeRegisterForm(RegisterFormFields.gender, gender)
  }

  const handleAgeInfoPress = () => {
    setAgeModalVisible(!ageModalVisible);
  }

  const handleHeightInfoPress = () => {
    setHeightModalVisible(!heightModalVisible);
  }

  const handleSubmitPress = () => {
    Navigation.navigate(Screens.AUTH_CODE, { phone: authStore.registerForm.phone, isRegister: true });
  }

  const handleLoginPress = () => {
    Navigation.navigate(Screens.AUTH_START);
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <StatusBar backgroundColor={Colors.black} barStyle={'light-content'}/>
          <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
            <LinearGradient colors={[Colors.black, Colors.sixtyPercentBlack, Colors.sixtyPercentBlack, Colors.black]} style={styles.linearGradient}>
              <Text ag={Ag.H1} color={Colors.lightGrey}>Создать новый аккаунт</Text>
              <Input 
                containerStyle={styles.input}
                label='Рост'
                value={authStore.registerForm.height}
                onChangeText={handleChangeHeight} 
                rightComponent={<IconButton icon={<QuestionIcon size={16} color={Colors.lightGrey}/>} onPress={handleHeightInfoPress}/>}
                keyboardType="numeric"
              />
              <Input 
                containerStyle={styles.input}
                label='Возраст'
                value={authStore.registerForm.age}
                onChangeText={handleChangeAge}
                rightComponent={<IconButton icon={<QuestionIcon size={16} color={Colors.lightGrey}/>} onPress={handleAgeInfoPress}/>}
                keyboardType="numeric"
              />
              <ButtonSwitch
                style={styles.genderSwitch}
                value={authStore.registerForm.gender}
                label={'Подбирать образы для'}
                labelStyle={styles.label}
                color={ButtonColor.Light}
                onSelect={handleGenderSelect} 
                options={[
                  { title: 'Мужчин', value: Gender.male},
                  { title: 'Женщин', value: Gender.female}
                ]}
              />
              <Button 
                title={'Готово'}
                style={styles.button}
                disabled={!isValid()}
                color={ButtonColor.Light} 
                onPress={handleSubmitPress}
              />
              <TouchableOpacity style={styles.login} onPress={handleLoginPress}>
                <Text ag={Ag.Body3} color={Colors.lightGrey}>Уже есть аккаунт? </Text>
                <Text ag={Ag.Body3Bold} color={Colors.lightGrey}>Войти</Text>
              </TouchableOpacity>
            </LinearGradient>
          </ImageBackground>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <AlertModal
        onBackdropPress={() => setAgeModalVisible(!ageModalVisible)}
        visible={ageModalVisible}
        title="Рост"
        text={"На основании этого параметра мы рассчитываем размеры других частей тела\n\nВы можете указать его примерно"}
      />
      <AlertModal
        onBackdropPress={() => setHeightModalVisible(!heightModalVisible)}
        visible={heightModalVisible}
        title="Возраст"
        text={"В зависимости от возраста пропорции тела могут  меняться\n\nВы можете указать его примерно"}
      />
    </>
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
