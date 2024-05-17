import React from "react";
import { Text, View, TextInput, TextInputProps } from "react-native";
import { s } from "./Input.style";
import { Unit } from "../../types";

type Props = {
  unit: Unit;
} & TextInputProps;

export const Input = ({ unit, ...restTextInputProps }: Props): JSX.Element => {
  return (
    <View style={s.root}>
      <TextInput style={s.input} {...restTextInputProps} />
      <Text style={s.label}>{unit}</Text>
    </View>
  );
};
