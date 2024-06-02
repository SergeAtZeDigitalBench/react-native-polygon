import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Category, Meal } from "@/models";

export type CategoryType = InstanceType<typeof Category>;

export type MealType = InstanceType<typeof Meal>;

export type RootStackParamList = {
  MealsCategories: undefined;
  MealsOverview: { categoryId: string };
};

export type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "MealsCategories" | "MealsOverview"
>;

export type NavProps = ScreenProps["navigation"];

export type RouteProps = ScreenProps["route"];
