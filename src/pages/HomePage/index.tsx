import React from "react";
import { View } from "react-native";

import { OpenMeteoAPIResponse } from "@/types";

import { getWeatherInterpretation } from "@/lib/adaptors/weatherApi";
import { MeteoBasic } from "@/components/MeteoBasic";
import { Txt } from "@/components/Txt";

import { s } from "./HomePage.style";

interface Props {
  weather: OpenMeteoAPIResponse;
  city: string;
}

export const HomePage = ({ weather, city }: Props): JSX.Element => {
  const { current_weather: currentWeather } = weather;

  return (
    <>
      <View style={s.weatherBasic}>
        <MeteoBasic
          city={city}
          temperature={Math.round(currentWeather.temperature)}
          weatherCode={currentWeather.weathercode}
        />
      </View>
      <View style={s.searchContainer}>
        <Txt>Search bar</Txt>
      </View>
      <View style={s.weatherAdvanced}>
        <Txt>Advanced weather info</Txt>
      </View>
    </>
  );
};
