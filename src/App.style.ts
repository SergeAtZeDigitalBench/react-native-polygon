import { StyleSheet, Text, View } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    paddingVertical: 10,
    textAlign: "center",
  },
  body: {
    flex: 6,
  },
  imageBox: { height: 300, marginVertical: 30 },
  imageDelete: {
    height: 40,
    width: 40,
    borderRadius: 12,
    position: "absolute",
    top: 15,
    right: 15,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  image: { height: "100%" },
  footer: { flex: 1, justifyContent: "center", alignItems: "center" },
  btn: { backgroundColor: "black", padding: 30 },
  btnTxt: { color: "white" },
});
