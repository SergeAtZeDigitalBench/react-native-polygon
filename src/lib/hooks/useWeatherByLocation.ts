import { useState, useEffect, useCallback, useRef } from "react";

import type { OpenMeteoAPIResponse, FetchState } from "@/types";

import { MeteoApi } from "@/lib/api/meteo";
import { isNullOrUndefined } from "@/lib/common";

export const useWeatherByLocation = (
  location: Record<"lon" | "lat", number> | null,
): [FetchState<OpenMeteoAPIResponse>, () => Promise<void>] => {
  const [weather, setWeather] = useState<FetchState<OpenMeteoAPIResponse>>({
    data: null,
    isLoading: false,
    error: null,
  });
  const mountedRef = useRef(true);

  const fetchWeatherByLocation = useCallback(async () => {
    if (isNullOrUndefined(location)) {
      return;
    }
    const { lon, lat } = location;
    setWeather((current) => ({ ...current, isLoading: true }));
    MeteoApi.fetchWeatherByCoords({ lon, lat }).then(([data, error]) => {
      mountedRef.current && setWeather({ data, isLoading: false, error });
    });
  }, [location]);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    location?.lat && location.lon && fetchWeatherByLocation();
  }, [fetchWeatherByLocation, location]);

  return [weather, fetchWeatherByLocation];
};
