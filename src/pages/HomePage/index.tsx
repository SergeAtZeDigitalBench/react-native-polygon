import React from "react";
import { Text, View } from "react-native";
import { s } from "./HomePage.style";

export const HomePage = (): JSX.Element => {
  return (
    <>
      <View style={s.weatherBasic}>
        <Text style={s.txt}>Basic weather info</Text>
      </View>
      <View style={s.searchContainer}>
        <Text style={s.txt}>Search bar</Text>
      </View>
      <View style={s.weatherAdvanced}>
        <Text style={s.txt}>Advanced weather info</Text>
      </View>
    </>
  );
};
