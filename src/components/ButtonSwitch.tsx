import React from 'react';
import {
  StyleProp, StyleSheet,
  TextStyle,
  TouchableOpacityProps,
  View, ViewStyle
} from 'react-native';
import { Fonts } from '../styles/Fonts';

import { Button, ButtonColor, ButtonSize, ButtonType } from './Button';
import { Text } from './Text';

export type ButtonSwitchOption = {
  title: string,
  value: any
}

interface IButtonProps extends TouchableOpacityProps {
  value: ButtonSwitchOption['value'],
  options: ButtonSwitchOption[];
  onSelect: (value: ButtonSwitchOption['value'],) => void;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  color?: ButtonColor;
}

export const ButtonSwitch = (props: IButtonProps) => {
  const {
    label,
    labelStyle,
    options,
    style,
    value,
    color = ButtonColor.Dark,
    onSelect
  } = props;

  return (
    <View style={style}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={styles.container}>
        {options?.map(({title, value: optionValue}, index) => (
          <Button 
            key={index}
            title={title} 
            size={ButtonSize.Small} 
            onPress={() => onSelect(optionValue)}
            color={color} 
            type={optionValue === value ? ButtonType.Solid : ButtonType.Bordered}
            style={[styles.button, index !== options.length - 1 && styles.margin]}
          /> 
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  label: {
    fontSize: 16,
    lineHeight: 23,
    fontFamily: Fonts.regular,
    marginBottom: 15
  },
  button: {
    flex: 1,
  },
  margin: {
    marginRight: 11
  }
});
