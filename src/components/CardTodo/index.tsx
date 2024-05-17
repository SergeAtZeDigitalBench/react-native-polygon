import React from "react";
import { Text, View } from "react-native";

import type { Todo } from "@/types";

type Props = {
  todo: Todo;
};

export const CardTodo = ({ todo }: Props): JSX.Element => {
  return (
    <View>
      <Text>{todo.title}</Text>
    </View>
  );
};
