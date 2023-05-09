import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { Colors } from '../../styles/Colors';
import { IIconProps } from './types/Icon';

export const HangerIcon = ({ size, color }: IIconProps) => {
  return (
    <Svg
      width={size || 48}
      height={size || 48}
      fill={color || Colors.black}
      viewBox="0 0 48 48"
    >
      <Path
        d="M10.124 35.683H7l2.45-2.025L23 23.12V20h1c.85.025 1.53-.324 2.118-.911.588-.588.882-1.306.882-2.156 0-.825-.294-1.532-.882-2.12a2.889 2.889 0 0 0-2.118-.88c-.826 0-1.532.293-2.12.88-.587.588-.88 1.362-.88 2.187h-2c0-1.45.475-2.475 1.5-3.5S22.55 12 24 12c1.45 0 2.475.5 3.5 1.5S29 15.55 29 17c0 1.225-.225 2.05-1 3-.775.95-1.8 1.15-3 1.5v1.62l13.55 10.538L41 35.683H10.124ZM13 33.658h22L24 25.07l-11 8.588Z"
      />
    </Svg>
  );
};
