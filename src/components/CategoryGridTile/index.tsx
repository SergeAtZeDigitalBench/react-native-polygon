import React from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

import { CategoryType } from "@/types";

interface Props extends CategoryType {}

export const CategoryGridTile = ({ title, color }: Props): JSX.Element => {
  return (
    <View style={s.gridItem}>
      <Pressable
        style={({ pressed }) => {
          return [s.pressable, pressed ? s.pressablePressed : null];
        }}
        android_ripple={{ color: "#ccc" }}
        onPress={() => {
          console.log("Click");
        }}
      >
        <View style={[s.innerContainer, { backgroundColor: color }]}>
          <Text style={s.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const s = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressable: { flex: 1 },
  pressablePressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
