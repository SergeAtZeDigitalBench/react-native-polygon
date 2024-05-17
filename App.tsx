import { useState, useEffect } from "react";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text, View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";

import { DisplayTemperature } from "./components/DisplayTemperature";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import hotImg from "./assets/hot.png";
import coldImg from "./assets/cold.png";
import { convert, reverseUnit, isWeatherWarm, isNumeric } from "./lib";
import { Unit } from "./types";
import { s } from "./App.style";

export default function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [currentUnit, setCurrentUnit] = useState<Unit>(Unit.C);

  const isHot = isWeatherWarm(inputValue, currentUnit);

  const swapUnit = () => {
    setCurrentUnit((current) => reverseUnit(current));
  };

  const handleChange = (text: string) => {
    if (!isNumeric(text)) return;
    setInputValue(text);
  };

  console.log("inputValue :>> ", inputValue);

  return (
    <ImageBackground
      style={s.backgroundImage}
      source={isHot ? hotImg : coldImg}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayTemperature
              temperature={convert(inputValue, currentUnit)}
              unit={reverseUnit(currentUnit)}
              isEmpty={inputValue === "" || inputValue === "-"}
            />
            <Input
              placeholder="Type your temperature..."
              maxLength={3}
              defaultValue={""}
              value={inputValue ? inputValue.toString() : ""}
              onChangeText={handleChange}
              unit={currentUnit}
            />
            <Button onPress={swapUnit}>Convert to {currentUnit}</Button>
          </View>
          <StatusBar />
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
