import React from "react";
import { StatusBar } from "expo-status-bar";

import { CategoryScreen } from "@/screens/CategoryScreen";

import { s } from "./App.style";

export const AppCore = (): JSX.Element => {
  return (
    <>
      <CategoryScreen />
      <StatusBar style="light" />
    </>
  );
};
