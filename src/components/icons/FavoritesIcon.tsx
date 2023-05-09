import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { Colors } from '../../styles/Colors';
import { IIconProps } from './types/Icon';

export const FavoritesIcon = ({ size, color }: IIconProps) => {
  return (
    <Svg
      width={size || 48}
      height={size || 48}
      fill={color || Colors.black}
      viewBox="0 0 48 48"
    >
      <Path
        d="m24.097 36-1.343-1.212c-2.308-2.12-4.217-3.948-5.726-5.486-1.508-1.537-2.71-2.912-3.605-4.123-.895-1.212-1.523-2.309-1.883-3.29a8.598 8.598 0 0 1-.54-2.98c0-1.968.66-3.612 1.98-4.93C14.303 12.658 15.934 12 17.877 12c1.244 0 2.395.295 3.454.884 1.059.59 1.981 1.44 2.767 2.554.917-1.179 1.888-2.046 2.914-2.603A6.828 6.828 0 0 1 30.318 12c1.943 0 3.574.66 4.895 1.978 1.32 1.32 1.98 2.963 1.98 4.93 0 1.005-.18 1.998-.54 2.98-.36.982-.987 2.08-1.882 3.29-.895 1.212-2.097 2.587-3.606 4.124-1.508 1.538-3.417 3.367-5.726 5.486L24.097 36Zm0-2.587c2.21-2.03 4.028-3.77 5.455-5.222 1.428-1.452 2.561-2.723 3.402-3.814.84-1.092 1.43-2.065 1.768-2.919a6.872 6.872 0 0 0 .507-2.545c0-1.444-.458-2.63-1.375-3.557-.917-.928-2.093-1.392-3.529-1.392-1.124 0-2.165.344-3.122 1.032-.958.688-1.731 1.653-2.32 2.898h-1.605c-.567-1.223-1.33-2.183-2.287-2.882-.957-.698-1.998-1.048-3.122-1.048-1.436 0-2.612.464-3.53 1.392-.916.928-1.375 2.115-1.375 3.563 0 .844.17 1.698.508 2.56.338.862.928 1.844 1.768 2.947.84 1.102 1.981 2.373 3.422 3.814 1.44 1.44 3.252 3.165 5.435 5.173Z"
      />
    </Svg>
  );
};
