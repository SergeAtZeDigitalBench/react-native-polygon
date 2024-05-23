import { HomePage } from "@/pages/HomePage";
import { useUserLocation } from "@/lib/hooks/useUserLocation";

export const AppCore = (): JSX.Element => {
  const [location] = useUserLocation();
  console.log("location :>> ", location);

  return (
    <>
      <HomePage />
    </>
  );
};

export default AppCore;
