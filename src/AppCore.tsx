import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { RootStackParamList } from "@/types";

import { CategoryScreen } from "@/screens/CategoryScreen";
import { MealsOverviewScreen } from "@/screens/MealsOverviewScreen";
import { SCREEN } from "@/constants";

import { s } from "./App.style";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppCore = (): JSX.Element => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#523c30",
            },
          }}
        >
          <Stack.Screen
            name={SCREEN.MEALS_CATEGORIES}
            component={CategoryScreen}
            options={{
              title: "All Categories",
            }}
          />

          <Stack.Screen
            name={SCREEN.MEALS_OVERVIEW}
            component={MealsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </>
  );
};
