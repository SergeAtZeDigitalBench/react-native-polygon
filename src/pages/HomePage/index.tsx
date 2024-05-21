import React from "react";
import { Text, View } from "react-native";
import { s } from "./HomePage.style";

type Props = {
  [x: string]: any;
};

export const HomePage = ({}: Props): JSX.Element => {
  return (
    <View>
      <Text>HomePage</Text>
    </View>
  );
};
