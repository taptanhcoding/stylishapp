import Svg, { Path } from 'react-native-svg';

export const UserIcon = ({ size = 24, color = "#626262" }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none">
    <Path
      d="M9 14C6.23858 14 4 16.2386 4 19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19C20 16.2386 17.7614 14 15 14H9Z"
      fill={color}
    />
    <Path
      d="M12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2Z"
      fill={color}
    />
  </Svg>
);
