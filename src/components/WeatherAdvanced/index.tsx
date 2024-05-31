import React from "react";
import { View } from "react-native";

import type { OpenMeteoAPIResponse } from "@/types";

import { useStoreContext } from "@/providers/StoreProvider";
import { Txt } from "@/components/Txt";

import { s } from "./WeatherAdvanced.style";
import { getTimeToHhMmSs } from "@/lib/adaptors/dateTime";

const convertWindSpeed = (speed: number, units: "km/h" | "m/s" | "ms") => {
  if (units === "ms" || units === "m/s") {
    return speed;
  }
  const floatSpeed = (speed * 1000) / 3600;
  return floatSpeed.toFixed(1);
};

const getAdvancedMetrics = ({
  current_weather,
  current_weather_units,
  daily,
}: OpenMeteoAPIResponse) => {
  const sunriseTime = getTimeToHhMmSs(new Date(daily.sunrise[0]));
  const sunsetTime = getTimeToHhMmSs(new Date(daily.sunset[0]));
  const ws = convertWindSpeed(
    current_weather.windspeed,
    current_weather_units.windspeed as "km/h" | "m/s" | "ms",
  );

  return {
    windSpeed: `${ws} m/s`,
    sunrise: `${sunriseTime.hours}:${sunriseTime.minutes}`,
    sunset: `${sunsetTime.hours}:${sunsetTime.minutes}`,
  };
};

const Item = ({ label, value }: { value: string; label: string }) => (
  <View style={s.item}>
    <Txt style={s.itemValue}>{value}</Txt>
    <Txt style={s.itemLabel}>{label}</Txt>
  </View>
);

export const WeatherAdvanced = (): JSX.Element | null => {
  const { store } = useStoreContext();

  if (!store.weather.data) {
    return null;
  }

  const { windSpeed, sunrise, sunset } = getAdvancedMetrics(store.weather.data);

  return (
    <View style={s.container}>
      <Item value={sunrise} label="Sunrise" />
      <Item value={sunset} label="Sunset" />
      <Item value={windSpeed} label="WindSpeed" />
    </View>
  );
};
