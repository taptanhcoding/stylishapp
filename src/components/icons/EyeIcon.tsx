import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

export const EyeIcon = ({size = 24, color = '#626262'}) => (
  <Svg
    width={size}
    height={size} 
    viewBox="0 0 20 20"
    fill="none">
    <G clipPath="url(#clip0_1_18710)">
      <Path
        d="M0.833252 10C0.833252 10 4.16658 3.33334 9.99992 3.33334C15.8333 3.33334 19.1666 10 19.1666 10C19.1666 10 15.8333 16.6667 9.99992 16.6667C4.16658 16.6667 0.833252 10 0.833252 10Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_18710">
        <Rect width="20" height="20" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
