import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import { useFonts } from "expo-font";

import { AppCore } from "@/AppCore";
import { s } from "@/App.style";

import backgroundImg from "./assets/background.png";

export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf"),
  });

  return (
    <ImageBackground
      source={backgroundImg}
      imageStyle={s.backgroundImage}
      style={s.background}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          {isFontLoaded && <AppCore />}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
