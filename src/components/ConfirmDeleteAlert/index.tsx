import React from "react";
import { View } from "react-native";
import Dialog from "react-native-dialog";

import { s } from "./ConfirmDeleteAlert.style";

interface Props {
  isVisible: boolean;
  handleConfirm: () => void;
  handleCancel: () => void;
}

export const ConfirmDeleteAlert = ({
  isVisible,
  handleCancel,
  handleConfirm,
}: Props): JSX.Element => {
  return (
    <Dialog.Container visible={isVisible}>
      <Dialog.Title style={s.title}>Confirm delete</Dialog.Title>
      <Dialog.Description style={s.description}>
        Do you want to delete this todo? You cannot undo this action.
      </Dialog.Description>
      <View style={s.action}>
        <Dialog.Button
          label="Cancel"
          onPress={handleCancel}
          style={s.buttonCancel}
        />
        <Dialog.Button
          label="Delete"
          onPress={handleConfirm}
          style={s.buttonSubmit}
        />
      </View>
    </Dialog.Container>
  );
};
