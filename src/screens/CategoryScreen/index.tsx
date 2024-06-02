import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";

import { CategoryType } from "@/types";
import { CATEGORIES } from "@/data";
import { CategoryGridTile } from "@/components/CategoryGridTile";

const renderCategoryItem = ({ item }: ListRenderItemInfo<CategoryType>) => {
  return <CategoryGridTile {...item} />;
};

interface Props {
  [x: string]: any;
}

export const CategoryScreen = ({}: Props): JSX.Element => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

const s = StyleSheet.create({});
