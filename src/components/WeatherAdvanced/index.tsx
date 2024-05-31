import React from "react";
import { View } from "react-native";

import { Txt } from "@/components/Txt";

import { s } from "./WeatherAdvanced.style";

export const WeatherAdvanced = (): JSX.Element => {
  return (
    <View>
      <View>
        <Txt>a</Txt>
      </View>
      <View>
        <Txt>b</Txt>
      </View>
      <View>
        <Txt>c</Txt>
      </View>
    </View>
  );
};
