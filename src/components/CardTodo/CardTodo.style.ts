import { StyleSheet } from "react-native";

const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 8,
  },
  shadowOpacity: 0.46,
  shadowRadius: 11.14,

  elevation: 17,
};

export const s = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    height: 115,
    borderRadius: 14,
    paddingHorizontal: 20,
    ...shadow,
  },
  title: {
    fontSize: 25,
  },
  img: {
    height: 25,
    width: 25,
  },
});
