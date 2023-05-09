import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { Colors } from '../../styles/Colors';
import { IIconProps } from './types/Icon';

export const DocIcon = ({ size, color }: IIconProps) => {
  return (
    <Svg
      width={size || 48}
      height={size || 48}
      fill={color || Colors.black}
      viewBox="0 0 48 48"
    >
      <Path d="M11.8 42.4h-3v-40h21.05L40.8 13.35V42.4h-29Zm16.55-27.7V5.4H11.8v34h26V14.7h-9.45Z"/>
    </Svg>
  );
};
