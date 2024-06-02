import React from "react";
import { StyleSheet, FlatList, ListRenderItemInfo } from "react-native";

import { CategoryType, ScreenProps } from "@/types";

import {} from "@/constants";
import { CATEGORIES } from "@/data";
import { CategoryGridTile } from "@/components/CategoryGridTile";

export const CategoryScreen = ({ navigation }: ScreenProps): JSX.Element => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }: ListRenderItemInfo<CategoryType>) => {
        return <CategoryGridTile {...item} />;
      }}
      numColumns={2}
    />
  );
};

const s = StyleSheet.create({});
