import { HomePage } from "@/pages/HomePage";
import { useUserLocation, useWeatherByLocation } from "@/lib/hooks";

export const AppCore = (): JSX.Element | null => {
  const [location] = useUserLocation();
  const [weather] = useWeatherByLocation(location.data);

  return <>{weather.data && <HomePage weather={weather.data} />}</>;
};

export default AppCore;
