import { HomePage } from "@/pages/HomePage";
import { useUserLocation, useWeatherByLocation } from "@/lib/hooks";

export const AppCore = (): JSX.Element | null => {
  const [location] = useUserLocation();
  // const [weather] = useWeatherByLocation(location.data);
  console.log("location :>> ", location);
  // console.log("weather :>> ", weather);

  return (
    <>
      <HomePage />
    </>
  );
};

export default AppCore;
