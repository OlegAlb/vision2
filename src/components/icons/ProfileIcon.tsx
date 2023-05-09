import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { Colors } from '../../styles/Colors';
import { IIconProps } from './types/Icon';

export const ProfileIcon = ({ size, color }: IIconProps) => {
  return (
    <Svg
      width={size || 48}
      height={size || 48}
      fill={color || Colors.black}
      viewBox="0 0 48 48"
    >
      <Path
        d="M24 23.594c-1.65 0-3-.54-4.05-1.623-1.05-1.082-1.575-2.473-1.575-4.174 0-1.7.525-3.092 1.575-4.174C21 12.541 22.35 12 24 12s3 .541 4.05 1.623c1.05 1.082 1.575 2.474 1.575 4.174 0 1.7-.525 3.092-1.575 4.174-1.05 1.082-2.4 1.623-4.05 1.623ZM12 36v-3.633c0-.979.238-1.816.713-2.512a4.61 4.61 0 0 1 1.837-1.585c1.675-.772 3.281-1.352 4.819-1.739a18.929 18.929 0 0 1 4.631-.58c1.55 0 3.087.2 4.613.6 1.524.4 3.123.975 4.797 1.727a4.56 4.56 0 0 1 1.882 1.583c.472.692.708 1.527.708 2.506V36H12Zm2.25-2.319h19.5v-1.314c0-.412-.119-.805-.356-1.179a2.284 2.284 0 0 0-.881-.83c-1.6-.8-3.063-1.347-4.388-1.643A18.848 18.848 0 0 0 24 28.27a19.36 19.36 0 0 0-4.163.445c-1.35.296-2.812.844-4.387 1.643-.35.18-.637.457-.862.83a2.25 2.25 0 0 0-.338 1.18v1.313ZM24 21.275c.975 0 1.781-.328 2.419-.985.637-.657.956-1.488.956-2.493s-.319-1.836-.956-2.493c-.638-.657-1.444-.985-2.419-.985-.975 0-1.781.328-2.419.985-.637.657-.956 1.488-.956 2.493s.319 1.836.956 2.493c.638.657 1.444.985 2.419.985Z"
      />
    </Svg>
  );
};
