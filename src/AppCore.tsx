import { HomePage } from "@/pages/HomePage";
import {
  useUserLocation,
  useWeatherByLocation,
  useCityByLocation,
} from "@/lib/hooks";

export const AppCore = (): JSX.Element | null => {
  const [location] = useUserLocation();
  const [weather] = useWeatherByLocation(location.data);
  const [city] = useCityByLocation(location.data);

  return (
    <>
      {weather.data && city.data && (
        <HomePage weather={weather.data} city={city.data} />
      )}
    </>
  );
};

export default AppCore;
