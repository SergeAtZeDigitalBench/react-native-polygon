import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import type { ScreenProps } from "@/types";

import { MEALS } from "@/data";
import { MealSummaryItem } from "@/components/MealSummaryItem";

const getMealsByCategoryId = (categoryId?: string) => {
  if (!categoryId) return [];

  return MEALS.filter(
    (current) => current.categoryIds.indexOf(categoryId) > -1,
  );
};

export const MealsOverviewScreen = ({ route }: ScreenProps): JSX.Element => {
  const mealsFound = getMealsByCategoryId(route.params?.categoryId);

  return (
    <View style={s.container}>
      <FlatList
        data={mealsFound}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <MealSummaryItem {...item} />;
        }}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
