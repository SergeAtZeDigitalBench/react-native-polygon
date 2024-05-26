import React from "react";
import { View } from "react-native";

import { Txt } from "@/components/Txt";
import { s } from "./HomePage.style";

export const HomePage = (): JSX.Element => {
  return (
    <>
      <View style={s.weatherBasic}>
        <Txt>Basic weather info</Txt>
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
