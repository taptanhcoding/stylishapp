
import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const HomeIcon = ({color="black", size=24}: {color: string, size: number}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path 
        d="M3.76923 9L12.4231 2L21.0769 9V20C21.0769 20.5304 20.8743 21.0391 20.5137 21.4142C20.153 21.7893 19.6639 22 19.1538 22H5.6923C5.18227 22 4.69313 21.7893 4.33248 21.4142C3.97184 21.0391 3.76923 20.5304 3.76923 20V9Z" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M9.53845 22V12H15.3077V22" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </Svg>
  );
};
