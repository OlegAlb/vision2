import React from 'react';
import {
  Pressable,
  StyleSheet, ViewProps
} from 'react-native';
import Animated, { FadeInDown, FadeOutDown } from 'react-native-reanimated';
import { Colors } from '../styles/Colors';

export interface IModalProps extends ViewProps {
  visible: boolean,
  onBackdropPress?: () => void
}

export const Modal = ({ visible, children, onBackdropPress }: IModalProps) => {
  return visible ? (
    <Animated.View style={styles.container} entering={FadeInDown} exiting={FadeOutDown}>
      <Pressable onPress={onBackdropPress} style={styles.backdrop}/>
      {children}
    </Animated.View>
  ) : null
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.sixtyPercentBlack
  },
});
