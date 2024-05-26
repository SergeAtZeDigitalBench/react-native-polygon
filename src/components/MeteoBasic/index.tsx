import React from "react";
import { View, Image } from "react-native";

import { Txt } from "@/components/Txt";
import { s } from "./MeteoBasic.style";

interface Props {
  [x: string]: any;
}

export const MeteoBasic = ({}: Props): JSX.Element => {
  return (
    <>
      <View style={s.clock}>
        <Txt>Clock</Txt>
      </View>
      <View style={s.city}>
        <Txt>London</Txt>
      </View>
      <View style={s.interpretation}>
        <Txt style={s.interpretationText}>Sunny</Txt>
      </View>
      <View style={s.temperatureContainer}>
        <Txt style={s.temperature}>3°</Txt>
        <Image style={{ width: 50, height: 50, backgroundColor: "white" }} />
      </View>
    </>
  );
};
