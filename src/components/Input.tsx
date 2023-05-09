import React, { useEffect, useState } from 'react';
import { StyleProp, StyleSheet, TextInputProps, View, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import Animated, { interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';


import { Colors } from '../styles/Colors';
import { Text } from './Text';

interface IInputProps extends TextInputProps {
  mask?: string;
  rightComponent?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  label?: string;
  onChangeText: (value: string) => void;
}

export const Input = (props: IInputProps) => {
  const hasValue = props.value && String(props.value).length > 0;

  const [isFocused, setIsFocused] = useState(Boolean(props.autoFocus || hasValue));

  const active = useSharedValue(props.autoFocus || hasValue ? 0 : 1);

  const animatedViewStyle = useAnimatedStyle(() => {
    return {
      top: interpolate(active.value, [0, 1], [0, -20]),
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      fontSize: interpolate(active.value, [0, 1], [16, 12]),
      color: interpolateColor(active.value, [0, 1], [Colors.darkGrey, Colors.lightGrey])
    };
  });

  useEffect(() => {
    active.value = withTiming(isFocused || hasValue ? 1 : 0)
  }, [isFocused, hasValue])

  const handleChangeText = (value: string) => props.onChangeText(value)

  const handleFocus = () => setIsFocused(true);
  
  const handleBlur = () => setIsFocused(false);

  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.label && (
        <Animated.View style={[styles.label, animatedViewStyle]}>
          <Text style={animatedTextStyle}>{props.label}</Text>
        </Animated.View>
      )}
      {!!props.mask ? (
        <TextInputMask 
          {...props}
          type="custom"
          options={{ mask: props.mask }}
          onChangeText={handleChangeText}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={''}
        />
      ) : (
        <TextInput
          {...props}
          onChangeText={handleChangeText}
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={''}
        />
      )}
      {props.rightComponent}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: Colors.darkGrey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    lineHeight: 26,
    flex: 1,
    padding: 0,
    borderWidth: 0,
    color: Colors.lightGrey
  },
  label: {
    position: 'absolute',
  }
});
