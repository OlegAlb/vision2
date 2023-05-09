import React from 'react';
import { StyleSheet, TextProps } from 'react-native';
import Animated from 'react-native-reanimated';

import { Colors } from '../styles/Colors';
import { Fonts } from '../styles/Fonts';

export enum Ag {
  H1 = 'headline1',
  H2 = 'headline2',
  H3 = 'headline3',

  Body1 = 'body1',
  Body1Bold = 'body1bold',
  Body2 = 'body2',
  Body2Bold = 'body2bold',
  Body3 = 'body3',
  Body3Bold = 'body3bold',

  Control1 = 'Control1'
  // Subtitle1 = 'subtitle1',
  // Subtitle2 = 'subtitle2',
  // Body2 = 'body2',
  // Caption1 = 'caption1',
  // Caption2 = 'caption2',
  // Control1 = 'control1',
  // Control2 = 'control2',
}

export enum Align {
  Auto = 'auto',
  Left = 'left',
  Right = 'right',
  Center = 'center',
  Justify = 'justify',
}

interface IText extends TextProps {
  ag?: Ag;
  children?: string | React.ReactNode[];
  align?: Align;
  color?: string;
  fontFamily?: string;
  fontSize?: number;
}

export const Text = (props: IText) => {

  return (
    <Animated.Text
      {...props}
      style={[
        props.ag && styles[props.ag],
        {
          color: props.color || Colors.black,
          textAlign: props.align || Align.Auto,
          fontFamily: props.fontFamily || props.ag && styles[props.ag].fontFamily || Fonts.primary,
          fontSize: props.fontSize ||props.ag && styles[props.ag].fontSize || 16,
        },
        props.style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  [Ag.H1]: {
    fontSize: 45,
    lineHeight: 56,
    fontFamily: Fonts.bold
  },
  [Ag.H2]: {
    fontSize: 40,
    lineHeight: 58,
    fontFamily: Fonts.bold
  },
  [Ag.H3]: {
    fontSize: 30,
    lineHeight: 43,
    fontFamily: Fonts.medium
  },
  [Ag.Body1]: {
    fontSize: 22,
    lineHeight: 32,
    fontFamily: Fonts.regular
  },
  [Ag.Body1Bold]: {
    fontSize: 22,
    lineHeight: 32,
    fontFamily: Fonts.bold
  },
  [Ag.Body2]: {
    fontSize: 20,
    lineHeight: 29,
    fontFamily: Fonts.regular
  },
  [Ag.Body2Bold]: {
    fontSize: 20,
    lineHeight: 29,
    fontFamily: Fonts.bold
  },
  [Ag.Body3]: {
    fontSize: 18,
    lineHeight: 26,
    fontFamily: Fonts.regular
  },
  [Ag.Body3Bold]: {
    fontSize: 18,
    lineHeight: 26,
    fontFamily: Fonts.medium
  },


  [Ag.Control1]: {
    fontSize: 20,
    lineHeight: 29,
    fontFamily: Fonts.regular
  }
  // !!!
  // [Ag.Subtitle1]: {
  //   fontSize: 16,
  //   lineHeight: 24,
  // },
  // [Ag.Subtitle2]: {
  //   fontSize: 14,
  //   lineHeight: 24,
  // },
  // [Ag.Body1]: {
  //   fontSize: 16,
  //   lineHeight: 24,
  // },
  // [Ag.Body2]: {
  //   fontSize: 14,
  //   lineHeight: 20,
  // },
  // [Ag.Caption1]: {
  //   fontSize: 12,
  //   lineHeight: 16,
  // },
  // [Ag.Caption2]: {
  //   fontSize: 10,
  //   lineHeight: 12,
  // },
  // [Ag.Control1]: {
  //   fontSize: 16,
  //   lineHeight: 24,
  // },
  // [Ag.Control2]: {
  //   fontSize: 14,
  //   lineHeight: 24,
  // },
});
