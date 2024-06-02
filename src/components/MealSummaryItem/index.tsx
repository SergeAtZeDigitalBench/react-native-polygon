import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";

import type { MealType } from "@/types";

interface Props extends MealType {
  [x: string]: any;
}

export const MealSummaryItem = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: Props): JSX.Element => {
  return (
    <View>
      <Pressable>
        <View>
          <Image source={{ uri: imageUrl }} style={s.image} />
          <Text style={s.title}>{title}</Text>
        </View>
        <View style={s.details}>
          <Text style={s.detailItem}>{duration}</Text>
          <Text style={s.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={s.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

const s = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    columnGap: 8,
  },
  detailItem: {
    fontSize: 12,
  },
});
