import React from 'react'
import Svg, { Path } from 'react-native-svg';

export default ({size = 16, fill = 'black'}) =>
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Path fill={fill} d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
  </Svg>
