import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { Colors } from '../../styles/Colors';
import { IIconProps } from './types/Icon';

export const InfoIcon = ({ size, color }: IIconProps) => {
  return (
    <Svg
      width={size || 48}
      height={size || 48}
      fill={color || Colors.black}
      viewBox="0 0 48 48"
    >
      <Path d="M22.65 34h3V22h-3v12ZM24 18.3c.466 0 .858-.153 1.175-.46.317-.307.475-.687.475-1.14 0-.482-.158-.885-.474-1.211A1.572 1.572 0 0 0 24 15c-.467 0-.86.163-1.176.489-.317.326-.475.73-.475 1.211 0 .453.158.833.474 1.14.316.307.708.46 1.175.46Zm.013 25.7c-2.758 0-5.35-.525-7.775-1.575-2.425-1.05-4.546-2.483-6.363-4.3-1.817-1.817-3.25-3.939-4.3-6.367C4.525 29.33 4 26.736 4 23.975c0-2.76.525-5.355 1.575-7.783 1.05-2.428 2.483-4.542 4.3-6.342 1.817-1.8 3.939-3.225 6.367-4.275C18.67 4.525 21.264 4 24.025 4c2.76 0 5.355.525 7.783 1.575 2.428 1.05 4.542 2.475 6.342 4.275 1.8 1.8 3.225 3.917 4.275 6.35C43.475 18.633 44 21.229 44 23.987s-.525 5.35-1.575 7.775c-1.05 2.425-2.475 4.543-4.275 6.354-1.8 1.81-3.917 3.244-6.35 4.3C29.367 43.472 26.771 44 24.013 44Zm.012-3c4.717 0 8.725-1.658 12.025-4.975 3.3-3.317 4.95-7.333 4.95-12.05 0-4.717-1.647-8.725-4.94-12.025C32.765 8.65 28.745 7 24 7c-4.7 0-8.708 1.647-12.025 4.94C8.658 15.235 7 19.255 7 24c0 4.7 1.658 8.708 4.975 12.025C15.292 39.342 19.308 41 24.025 41Z"/>
    </Svg>
  );
};