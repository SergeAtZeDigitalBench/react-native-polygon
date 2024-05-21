import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { AppCore } from "@/AppCore";
import { s } from "@/App.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <AppCore />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
