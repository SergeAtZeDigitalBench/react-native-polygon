import { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import { launchImageLibraryAsync } from "expo-image-picker";

import { s } from "./App.style";

interface State {
  isLoading: boolean;
  error: null | string;
  data: string[];
}

const initState: State = { isLoading: false, error: null, data: [] };

export const AppCore = (): JSX.Element => {
  const [images, setImages] = useState<State>(() => initState);

  const handlePickImage = async () => {
    try {
      setImages((current) => ({ ...current, isLoading: true, error: null }));
      const result = await launchImageLibraryAsync();
      if (result.canceled) {
        setImages((current) => ({
          ...current,
          isLoading: false,
        }));
        alert("No image selected");
        return;
      }
      const imageUrls = result.assets.map((current) => current.uri);

      setImages((current) => ({
        ...current,
        isLoading: false,
        data: [...current.data, ...imageUrls],
      }));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to load image";
      setImages((current) => ({
        ...current,
        isLoading: false,
        error: errorMessage,
      }));
    }
  };

  const handleDeleteImage = (uri: string) => {
    setImages((current) => ({
      ...current,
      data: current.data.filter((imgUrl) => imgUrl !== uri),
    }));
  };

  return (
    <>
      <Text style={s.title}>My favorite pictures</Text>
      <View style={s.body}>
        <ScrollView>
          {images.data.map((uri) => {
            return (
              <View key={uri} style={s.imageBox}>
                <Image source={{ uri }} style={s.image} />
                <TouchableOpacity
                  onPress={() => handleDeleteImage(uri)}
                  style={s.imageDelete}
                >
                  <Text style={{ color: "white" }}>🗑️</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={s.footer}>
        <TouchableOpacity style={s.btn} onPress={() => handlePickImage()}>
          <Text style={s.btnTxt}>Add picture</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
