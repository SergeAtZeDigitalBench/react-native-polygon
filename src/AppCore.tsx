import { HomePage } from "@/pages/HomePage";

import {
  useUserLocation,
  useWeatherByLocation,
  useCityByLocation,
} from "@/lib/hooks";
import { useStoreContext } from "./providers/StoreProvider";

export const AppCore = (): JSX.Element | null => {
  const { store } = useStoreContext();
  useUserLocation();
  useWeatherByLocation();
  useCityByLocation();

  const { weather, location } = store;

  return <>{location.data && weather.data && <HomePage />}</>;
};

export default AppCore;
