import { StyleSheet } from "react-native";
import { COLORS } from "@/constants";

export const s = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 60,
    right: 30,
    backgroundColor: "#c2daff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  text: {
    color: COLORS.BLUE,
    fontWeight: "bold",
    fontSize: 18,
  },
});
