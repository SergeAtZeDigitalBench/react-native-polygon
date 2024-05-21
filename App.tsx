import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import { AppCore } from "@/AppCore";
import { s } from "@/App.style";

import backgroundImg from "./assets/background.png";

export default function App() {
  return (
    <ImageBackground
      source={backgroundImg}
      imageStyle={s.backgroundImage}
      style={s.background}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <AppCore />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
