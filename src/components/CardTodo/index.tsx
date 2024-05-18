import React from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

import type { Todo } from "@/types";

import checkImg from "../../../assets/check.png";
import { s } from "./CardTodo.style";

type Props = {
  todo: Todo;
} & TouchableOpacityProps;

export const CardTodo = ({
  todo,
  ...restTouchableOpacityProps
}: Props): JSX.Element => {
  const { title, isCompleted } = todo;

  return (
    <TouchableOpacity style={s.card} {...restTouchableOpacityProps}>
      <Text
        style={[
          s.title,
          { textDecorationLine: isCompleted ? "line-through" : "none" },
        ]}
      >
        {title}
      </Text>
      {isCompleted && <Image source={checkImg} style={s.img} />}
    </TouchableOpacity>
  );
};
