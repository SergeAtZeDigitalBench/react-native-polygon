import React from "react";
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

import { s } from "./ButtonAdd.style";

export const ButtonAdd = ({
  children,
  style,
  ...restTouchableOpacityProps
}: TouchableOpacityProps): JSX.Element => {
  return (
    <TouchableOpacity style={[s.button, style]} {...restTouchableOpacityProps}>
      <Text style={s.text}>{children}</Text>
    </TouchableOpacity>
  );
};
