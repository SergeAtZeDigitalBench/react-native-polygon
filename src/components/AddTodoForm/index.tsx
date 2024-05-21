import React, { useState } from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";

import type { Todo } from "@/types";

import { s } from "./AddTodoForm.style";

interface Props {
  isVisible: boolean;
  onSubmit: (newTodo: Pick<Todo, "title">) => void;
  onCancel?: () => void;
}

export const AddTodoForm = ({
  isVisible,
  onSubmit,
  onCancel,
}: Props): JSX.Element => {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (!title) return;
    onSubmit({ title });
    setTitle("");
  };

  const handleCancel = () => {
    onCancel && onCancel();
  };

  return (
    <Dialog.Container visible={isVisible} onBackdropPress={handleCancel}>
      <Dialog.Title style={s.title}>Add todo</Dialog.Title>
      <Dialog.Description style={s.description}>
        Choose a title for your todo
      </Dialog.Description>
      <Dialog.Input
        onChangeText={(text) => {
          setTitle(text);
        }}
        placeholder="Eg. go to gym"
      />
      <View style={s.action}>
        <Dialog.Button
          label="Cancel"
          style={s.buttonCancel}
          onPress={handleCancel}
        />
        <Dialog.Button
          label="Save"
          style={[s.buttonSubmit, { opacity: !title ? 0.7 : 1 }]}
          onPress={handleSubmit}
          disabled={!title}
        />
      </View>
    </Dialog.Container>
  );
};
