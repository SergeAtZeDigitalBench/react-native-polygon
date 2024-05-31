import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  Theme,
  DefaultTheme,
} from "@react-navigation/native";
import { HomePage } from "@/pages/HomePage";
import { ForecastsPage } from "@/pages/ForecastsPage";

import { useStoreContext } from "@/providers/StoreProvider";
import {
  useUserLocation,
  useWeatherByLocation,
  useCityByLocation,
} from "@/lib/hooks";

const Stack = createNativeStackNavigator();

const theme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export const AppCore = (): JSX.Element | null => {
  const { store } = useStoreContext();
  useUserLocation();
  useWeatherByLocation();
  useCityByLocation();

  return (
    <NavigationContainer theme={theme}>
      {store.weather.data && (
        <Stack.Navigator
          screenOptions={{ headerShown: false, animation: "fade" }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Forecasts" component={ForecastsPage} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppCore;
