import React from "react";
import { Text, Image } from "react-native";

import { s } from "./Header.style";

import logoImg from "../../../assets/logo.png";

export const Header = (): JSX.Element => {
  return (
    <>
      <Image source={logoImg} style={s.img} resizeMode="contain" />
      <Text style={s.subTitle}>You probably have something to do</Text>
    </>
  );
};
