import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "red",
  },
  description: {
    fontSize: 18,
    fontWeight: "semibold",
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonSubmit: {
    backgroundColor: "red",
    color: "white",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 7,
    minWidth: 120,
    fontWeight: "bold",
  },
  buttonCancel: {
    backgroundColor: "grey",
    color: "white",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 7,
    minWidth: 120,
    fontWeight: "bold",
  },
});
