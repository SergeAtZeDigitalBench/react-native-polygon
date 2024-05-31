import React from "react";
import { View } from "react-native";

import { Txt } from "@/components/Txt";

import { s } from "./ForecastsPage.style";

type Props = {
  [x: string]: any;
};

export const ForecastsPage = ({}: Props): JSX.Element => {
  return (
    <View>
      <Txt>Forecasts Page</Txt>
    </View>
  );
};
