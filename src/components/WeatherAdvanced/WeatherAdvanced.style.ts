import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#0000005c",
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 15,
  },
  item: {
    alignItems: "center",
  },
  itemValue: {
    fontSize: 20,
  },
  itemLabel: {
    fontSize: 17,
  },
});
