import React, { type ReactNode } from "react";
import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

import { s } from "./Button.style";

type Props = {
  children: ReactNode;
} & TouchableOpacityProps;

export const Button = ({ children, ...restProps }: Props): JSX.Element => {
  return (
    <TouchableOpacity style={s.button} {...restProps}>
      <Text style={s.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};
