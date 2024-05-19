import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Dialog from "react-native-dialog";

import { ACTION } from "@/types";
import { useStoreContext } from "@/providers/StoreProvider";
import { s } from "./ErrorDisplay.style";

const { ERROR_SET } = ACTION;

export const ErrorDisplay = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [store, dispatch] = useStoreContext();
  const { error } = store;

  const handleIgnore = () => {
    setIsVisible(false);
  };

  const handleDismiss = () => {
    dispatch({ type: ERROR_SET, payload: null });
    setIsVisible(false);
  };

  useEffect(() => {
    if (!error) return;

    setIsVisible(true);
  }, [error]);

  return (
    <Dialog.Container visible={isVisible}>
      <Dialog.Title style={s.title}>ERROR!</Dialog.Title>
      <Dialog.Description style={s.description}>{error}</Dialog.Description>
      <View style={s.action}>
        <Dialog.Button
          label="Dismiss"
          onPress={handleDismiss}
          style={s.buttonCancel}
        />
        <Dialog.Button
          label="Ignore"
          onPress={handleIgnore}
          style={s.buttonSubmit}
        />
      </View>
    </Dialog.Container>
  );
};
