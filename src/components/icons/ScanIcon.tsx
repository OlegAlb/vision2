import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { Colors } from '../../styles/Colors';
import { IIconProps } from './types/Icon';

export const ScanIcon = ({ size, color }: IIconProps) => {
  return (
    <Svg
      width={size || 48}
      height={size || 48}
      fill={color || Colors.black}
      viewBox="0 0 48 48"
    >
      <Path
        d="M35.583 27.2V36H11.417v-8.8h1.61v7.2h21.037v-7.2h1.52ZM38 24.8H9v-1.6h29v1.6ZM13.028 13.6v.8h-1.611V12H13.833v1.6h-.805Zm12.889 0h-4.028V12h4.028v1.6Zm9.666 0v.8h-1.61v-.8h-.806V12h2.417v1.6Zm-15.305 0h-4.03V12h4.03v1.6Zm11.28 0h-4.03V12h4.03v1.6Zm4.025 7.2h-1.61l.09-4h1.52v4Zm-22.555 0h-1.611v-4h1.61v4Z"
      />
    </Svg>
  );
};
