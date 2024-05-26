import { Text, type TextProps } from "react-native";

import { s } from "./Txt.style";

export const Txt = ({
  children,
  style,
  ...restTextProps
}: TextProps): JSX.Element => {
  return (
    <Text style={[s.global, style]} {...restTextProps}>
      {children}
    </Text>
  );
};
