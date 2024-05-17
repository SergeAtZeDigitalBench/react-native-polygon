import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  input: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 50,
    paddingLeft: 25,
  },
  root: {
    alignSelf: "stretch",
    justifyContent: "center",
  },
  label: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 25,
    fontSize: 30,
  },
});
