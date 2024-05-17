import React from "react";
import { Text, View } from "react-native";

import { Unit } from "../../types";
import { s } from "./DisplayTemperature.style";

type Props = {
  temperature: number | null;
  unit: Unit;
  isEmpty: boolean;
};

export const DisplayTemperature = ({
  temperature,
  unit,
  isEmpty,
}: Props): JSX.Element => {
  return (
    <Text style={s.temperatureTxt}>
      {isEmpty ? "_" : temperature} {unit}
    </Text>
  );
};
