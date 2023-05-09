import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { Colors } from '../../styles/Colors';
import { IIconProps } from './types/Icon';

export const ProfileFemaleIcon = ({ size, color }: IIconProps) => {
  return (
    <Svg
      width={size || 48}
      height={size || 48}
      fill={color || Colors.black}
    >
      <Path
        d="M19.837 24a2.202 2.202 0 0 1-1.714-.769 2.096 2.096 0 0 1-.536-1.781l.6-4.5c.2-1.425.85-2.606 1.95-3.544C21.238 12.47 22.526 12 24 12s2.762.469 3.863 1.406c1.1.938 1.75 2.119 1.95 3.544l.6 4.5c.1.675-.08 1.269-.536 1.781a2.202 2.202 0 0 1-1.714.769h-8.326Zm-.037-2.25h8.4l-.602-4.471c-.124-.87-.53-1.591-1.217-2.166A3.603 3.603 0 0 0 24 14.25c-.9 0-1.693.285-2.38.854a3.37 3.37 0 0 0-1.22 2.184l-.6 4.462ZM12 36v-3.525c0-.95.238-1.763.713-2.438A4.574 4.574 0 0 1 14.55 28.5c1.675-.75 3.281-1.313 4.819-1.688A19.48 19.48 0 0 1 24 26.25c1.55 0 3.087.194 4.613.581 1.524.388 3.123.946 4.797 1.676.782.353 1.41.865 1.882 1.537.472.67.708 1.481.708 2.431V36H12Zm2.25-2.25h19.5v-1.275c0-.4-.119-.781-.356-1.144a2.258 2.258 0 0 0-.881-.806c-1.6-.775-3.063-1.306-4.388-1.594A19.401 19.401 0 0 0 24 28.5a19.93 19.93 0 0 0-4.163.431c-1.35.288-2.812.819-4.387 1.594a2.13 2.13 0 0 0-.862.806 2.135 2.135 0 0 0-.338 1.144v1.275Z"
      />
    </Svg>
  );
};
