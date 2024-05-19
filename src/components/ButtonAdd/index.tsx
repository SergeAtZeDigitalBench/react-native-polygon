import React from "react";
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

import { s } from "./ButtonAdd.style";

type Props = {
  [x: string]: any;
} & TouchableOpacityProps;

export const ButtonAdd = ({
  children,
  style,
  ...restTouchableOpacityProps
}: Props): JSX.Element => {
  return (
    <TouchableOpacity style={[s.button, style]} {...restTouchableOpacityProps}>
      <Text style={s.text}>{children}</Text>
    </TouchableOpacity>
  );
};
