import React from "react";
import { View } from "react-native";

import { WeatherAdvanced } from "@/components/WeatherAdvanced";
import { WeatherBasic } from "@/components/WeatherBasic";
import { Txt } from "@/components/Txt";

import { s } from "./HomePage.style";

export const HomePage = (): JSX.Element | null => {
  return (
    <>
      <View style={s.weatherBasic}>
        <WeatherBasic />
      </View>
      <View style={s.searchContainer}>
        <Txt>Search bar</Txt>
      </View>
      <View style={s.weatherAdvanced}>
        <WeatherAdvanced />
      </View>
    </>
  );
};
