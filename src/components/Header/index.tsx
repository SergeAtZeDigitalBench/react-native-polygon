import React from "react";
import { Text, Image } from "react-native";
import { s } from "./Header.style";

import logoImg from "../../../assets/logo.png";

type Props = {
  [x: string]: any;
};

export const Header = ({}: Props): JSX.Element => {
  return (
    <>
      <Image source={logoImg} style={s.img} resizeMode="contain" />
      <Text style={s.subTitle}>You probably have something to do</Text>
    </>
  );
};
