import {
  Text,
  useWindowDimensions,
  type TextProps,
  type TextStyle,
} from "react-native";

import { s } from "./Txt.style";

const RATIO = 0.001;

const calculateFontSize = (fz: number, windowHeight: number) =>
  Math.round(fz * RATIO * windowHeight);

export const Txt = ({
  children,
  style,
  ...restTextProps
}: TextProps): JSX.Element => {
  const { height } = useWindowDimensions();
  const fz = (style as TextStyle | undefined)?.fontSize || s.txt.fontSize;

  return (
    <Text
      style={[s.txt, style, { fontSize: calculateFontSize(fz, height) }]}
      {...restTextProps}
    >
      {children}
    </Text>
  );
};
