import React from "react";
import { View, Image } from "react-native";

import { getWeatherInterpretation } from "@/lib/adaptors/weatherApi";
import { Txt } from "@/components/Txt";

import { s } from "./MeteoBasic.style";

interface Props {
  temperature: number;
  weatherCode: number;
}

export const MeteoBasic = ({
  temperature,
  weatherCode,
}: Props): JSX.Element => {
  const interpretation = getWeatherInterpretation(weatherCode);

  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <View style={s.city}>
        <Txt>London</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretationText}>{interpretation.label}</Txt>
      </View>
      <View style={s.temperatureContainer}>
        <Txt style={s.temperature}>{temperature}°</Txt>
        <Image source={interpretation.image} style={s.image} />
      </View>
    </>
  );
};
