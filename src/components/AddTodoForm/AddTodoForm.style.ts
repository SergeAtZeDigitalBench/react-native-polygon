import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";

export const s = StyleSheet.create({
  container: {
    borderRadius: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: COLORS.BLUE,
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
    backgroundColor: COLORS.BLUE,
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
