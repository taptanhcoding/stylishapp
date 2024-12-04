import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';

export default function MenuIcon({color='#323232',size=24}: {color: string,size: number}) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_1_7348)">
        <Path d="M21 11.01L3 11V13H21V11.01ZM3 16H15V18H3V16ZM21 6H3V8.01L21 8V6Z" fill={color} />
      </G>
      <Defs>
        <ClipPath id="clip0_1_7348">
          <Rect width={24} height={24} rx={12} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
