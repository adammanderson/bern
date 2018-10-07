import React from 'react'
import Svg, { Path } from 'react-native-svg';

export default ({fill = 'white', size = 50}) =>
  <Svg viewBox="0 0 100 100" width={size} height={size}>
    <Path fill={fill} d="M79.312,10.027H20.685c-0.552,0-1,0.448-1,1v78.141c0,0.552,0.448,1,1,1h58.627c0.552,0,1-0.448,1-1V11.027  C80.312,10.475,79.864,10.027,79.312,10.027z M78.312,88.168H21.685v-7.055h56.627V88.168z M78.312,79.113H21.685V21.527h56.627  V79.113z M78.312,19.527H21.685v-7.5h56.627V19.527z"/>
    <Path fill={fill} d="M49.998,69.264c10.446,0,18.944-8.498,18.944-18.943c0-10.446-8.498-18.944-18.944-18.944S31.054,39.875,31.054,50.32  C31.054,60.766,39.552,69.264,49.998,69.264z M49.998,33.376c9.343,0,16.944,7.601,16.944,16.944s-7.601,16.943-16.944,16.943  S33.054,59.663,33.054,50.32S40.655,33.376,49.998,33.376z"/>
    <Path fill={fill} d="M49.998,74.764c13.479,0,24.444-10.965,24.444-24.443c0-13.479-10.965-24.444-24.444-24.444S25.554,36.842,25.554,50.32  C25.554,63.798,36.52,74.764,49.998,74.764z M49.998,27.876c12.375,0,22.444,10.068,22.444,22.444S62.374,72.764,49.998,72.764  S27.554,62.696,27.554,50.32S37.623,27.876,49.998,27.876z"/>
    <Path fill={fill} d="M68.677,16.86h3.86c0.552,0,1-0.448,1-1s-0.448-1-1-1h-3.86c-0.552,0-1,0.448-1,1S68.125,16.86,68.677,16.86z"/>
    <Path fill={fill} d="M59.349,16.86h3.86c0.552,0,1-0.448,1-1s-0.448-1-1-1h-3.86c-0.552,0-1,0.448-1,1S58.797,16.86,59.349,16.86z"/>
    <Path fill={fill} d="M60.498,54.216c0.552,0,1-0.448,1-1v-5.792c0-0.552-0.448-1-1-1s-1,0.448-1,1v5.792  C59.498,53.768,59.946,54.216,60.498,54.216z"/>
  </Svg>