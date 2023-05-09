import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { Colors } from '../../styles/Colors';
import { IIconProps } from './types/Icon';

export const CatalogIcon = ({ size, color }: IIconProps) => {
  return (
    <Svg
      width={size || 48}
      height={size || 48}
      fill={color || Colors.black}
      viewBox="0 0 48 48"
    >
      <Path
        d="M12 23V12h11v11H12Zm0 13V25h11v11H12Zm13-13V12h11v11H25Zm0 13V25h11v11H25ZM14 21h7v-7h-7v7Zm13 0h7v-7h-7v7Zm0 13h7v-7h-7v7Zm-13 0h7v-7h-7v7Z"
      />
    </Svg>
  );
};
