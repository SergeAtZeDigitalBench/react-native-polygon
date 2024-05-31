import React from "react";
import { View, Image, TouchableOpacity } from "react-native";

import { getWeatherInterpretation } from "@/lib/adaptors/weatherApi";
import { useStoreContext } from "@/providers/StoreProvider";
import { Clock } from "@/components/Clock";
import { Txt } from "@/components/Txt";

import { s } from "./WeatherBasic.style";
import { useNavigation } from "@react-navigation/native";

export const WeatherBasic = (): JSX.Element | null => {
  const { navigate } = useNavigation<any>();
  const { store } = useStoreContext();
  const { city, weather } = store;

  if (!weather.data) {
    return null;
  }

  const { current_weather: currentWeather } = weather.data;
  const interpretation = getWeatherInterpretation(currentWeather.weathercode);

  const handlePress = () => {
    navigate("Forecasts");
  };

  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View style={s.city}>{city.data && <Txt>{city.data}</Txt>}</View>
      <View style={s.interpretation}>
        <Txt style={s.interpretationText}>{interpretation.label}</Txt>
      </View>
      <View style={s.temperatureContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Txt style={s.temperature}>
            {Math.round(currentWeather.temperature)}°
          </Txt>
        </TouchableOpacity>
        <Image source={interpretation.image} style={s.image} />
      </View>
    </>
  );
};
