import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "react-native";

import { CardTodo } from "@/components/CardTodo";
import { Header } from "@/components/Header";
import { s } from "./src/App.style";

const TODO_LIST = [
  { id: 1, title: "Walk the dog", isCompleted: false },
  { id: 2, title: "Go to gym", isCompleted: false },
  { id: 3, title: "Learn React Native", isCompleted: false },
];

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>

          <View style={s.body}>
            <CardTodo todo={TODO_LIST[0]} />
          </View>

          <View style={s.footer}>
            <Text>footer</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
