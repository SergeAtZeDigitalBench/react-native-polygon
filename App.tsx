import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { s } from "./App.style";

export default function App() {
  return (
    <View style={s.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
