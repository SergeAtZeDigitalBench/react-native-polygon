import React from "react";
import { View, Image } from "react-native";

import { getWeatherInterpretation } from "@/lib/adaptors/weatherApi";
import { Clock } from "@/components/Clock";
import { Txt } from "@/components/Txt";

import { s } from "./MeteoBasic.style";

interface Props {
  temperature: number;
  weatherCode: number;
  city: string;
}

export const MeteoBasic = ({
  temperature,
  weatherCode,
  city,
}: Props): JSX.Element => {
  const interpretation = getWeatherInterpretation(weatherCode);

  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>
        <Txt>{city}</Txt>
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
