import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

import { s } from "./Button.style";

export const Button = ({
  children,
  ...restProps
}: TouchableOpacityProps): JSX.Element => {
  return (
    <TouchableOpacity style={s.button} {...restProps}>
      <Text style={s.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
