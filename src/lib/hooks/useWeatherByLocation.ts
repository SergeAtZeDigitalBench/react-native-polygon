import { useEffect, useCallback } from "react";

import { ACTION_TYPE } from "@/types";

import { useStoreContext } from "@/providers/StoreProvider";
import { isNullOrUndefined } from "@/lib/common";
import { MeteoApi } from "@/lib/api/meteo";

export const useWeatherByLocation = (): { refetch: () => Promise<void> } => {
  const { store, dispatch } = useStoreContext();

  const { data: location } = store.location;

  const fetchWeatherByLocation = useCallback(async () => {
    if (isNullOrUndefined(location)) {
      return;
    }
    const { lon, lat } = location;
    dispatch({ type: ACTION_TYPE.WEATHER_LOADING });

    const [data, error] = await MeteoApi.fetchWeatherByCoords({ lon, lat });

    if (error || !data) {
      dispatch({ type: ACTION_TYPE.WEATHER_ERROR, payload: error });
    } else {
      dispatch({ type: ACTION_TYPE.WEATHER_SET, payload: data });
    }
  }, [location]);

  useEffect(() => {
    location?.lat && location.lon && fetchWeatherByLocation();
  }, [fetchWeatherByLocation, location]);

  return { refetch: fetchWeatherByLocation };
};
