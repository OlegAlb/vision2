import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { Colors } from '../../styles/Colors';
import { IIconProps } from './types/Icon';

export const BackIcon = ({ size, color }: IIconProps) => {
  return (
    <Svg
      width={size || 48}
      height={size || 48}
      fill="none"
      viewBox="0 0 48 48"
    >
      <Path stroke={color || Colors.black} strokeWidth={3} d="M30 12 18 24l12 12" />
    </Svg>
  );
};
