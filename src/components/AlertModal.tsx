import React from 'react';
import {
  Pressable,
  StyleSheet, View, ViewProps
} from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { Colors } from '../styles/Colors';
import { Button, ButtonType } from './Button';
import { IconButton } from './IconButton';
import { CloseIcon } from './icons/CloseIcon';
import { IModalProps, Modal } from './Modal';
import { Ag, Text } from './Text';

interface IAlertModalProps extends IModalProps {
  title?: string,
  text?: string,
  buttonTitle?: string,
  showButton?: boolean,
  onButtonPress?: () => void,
}

export const AlertModal = ({ visible, title, text, showButton, buttonTitle, onButtonPress, onBackdropPress}: IAlertModalProps) => {
  return (
    <Modal visible={visible} onBackdropPress={onBackdropPress}>
      <View style={styles.alert}>
        <IconButton 
          onPress={onBackdropPress} 
          style={styles.closeBtn} 
          icon={<CloseIcon size={24} color={Colors.dark}/>}
        />
        {title && <Text ag={Ag.H3} style={styles.title}>{title}</Text>}
        {text && <Text ag={Ag.Body2}>{text}</Text>}
        {showButton && <Button style={styles.btn} type={ButtonType.Bordered} title={buttonTitle} onPress={onButtonPress}/>}
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  alert: {
    padding: 25,
    backgroundColor: Colors.lightGrey,
    marginHorizontal: 34
  },
  title: {
    marginBottom: 15
  },
  btn: {
    marginTop: 20
  },
  closeBtn: {
    position: 'absolute',
    right: 24,
    top: 24,
    zIndex: 20,
  }
});
