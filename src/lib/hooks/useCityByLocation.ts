import { useState, useEffect, useCallback, useRef } from "react";

import type { FetchState } from "@/types";

import { fetchCityByLocation } from "@/lib/api/openStreetMap";
import { isNullOrUndefined } from "@/lib/common";

export const useCityByLocation = (
  location: Record<"lon" | "lat", number> | null,
): [FetchState<string>, () => Promise<void>] => {
  const [city, setCity] = useState<FetchState<string>>({
    data: null,
    isLoading: false,
    error: null,
  });
  const mountedRef = useRef(true);

  const fetchByLocation = useCallback(async () => {
    if (isNullOrUndefined(location)) {
      return;
    }
    const { lon, lat } = location;
    setCity((current) => ({ ...current, isLoading: true }));
    fetchCityByLocation({ lon, lat }).then(([data, error]) => {
      mountedRef.current && setCity({ data, isLoading: false, error });
    });
  }, [location]);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    location?.lat && location.lon && fetchByLocation();
  }, [fetchByLocation, location]);

  return [city, fetchByLocation];
};
