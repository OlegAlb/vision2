import React, { useMemo } from 'react';
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  TouchableOpacityProps,
  TouchableOpacity,
  View,
} from 'react-native';

import { Colors } from '../styles/Colors';
import { Ag, Text } from './Text';

export enum ButtonType {
  Solid = 'solid',
  Bordered = 'bordered',
}

export enum ButtonColor {
  Dark = 'dark',
  Light = 'light',
}

export enum ButtonSize {
  Large = 'large',
  Small = 'small',
}

interface IButtonProps extends TouchableOpacityProps {
  title?: string;
  style?: StyleProp<ViewStyle>;
  type?: ButtonType;
  size?: ButtonSize;
  color?: ButtonColor;
}

export const Button = (props: IButtonProps) => {
  const {
    title,
    style,
    disabled,
    size = ButtonSize.Large,
    type = ButtonType.Solid,
    color = ButtonColor.Dark,
  } = props;

  const buttonStyles = useMemo(() => {
    return [styles.default, styles[size], styles[color], styles[type], style];
  }, [style, type, color, size]);

  const textColor = useMemo(() => {
    switch(color){
        case ButtonColor.Dark: 
            switch(type){
                case ButtonType.Bordered: return Colors.dark
                case ButtonType.Solid: return Colors.lightGrey
            }
        case ButtonColor.Light: 
            switch(type){
                case ButtonType.Bordered: return Colors.lightGrey
                case ButtonType.Solid: return Colors.dark
            }
    }
  }, [color, type])

  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={disabled}
      activeOpacity={disabled ? 1 : props.activeOpacity}
      style={[buttonStyles, { opacity: disabled ? 0.5 : 1 }]}
    >
      <Text ag={Ag.Control1} color={textColor}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  [ButtonColor.Dark]: {
    borderColor: Colors.dark,
    backgroundColor: Colors.dark
  },
  [ButtonColor.Light]: {
    borderColor: Colors.lightGrey,
    backgroundColor: Colors.lightGrey
  },
  [ButtonSize.Large]: {
    height: 50
  },
  [ButtonSize.Small]: {
    height: 40
  },
  [ButtonType.Bordered]: {
    borderWidth: 2,
    backgroundColor: Colors.transparent
  },
  [ButtonType.Solid]: {
    borderWidth: 0
  },
});
