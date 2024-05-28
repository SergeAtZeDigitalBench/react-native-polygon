import { useEffect, useCallback } from "react";

import { ACTION_TYPE } from "@/types";

import { useStoreContext } from "@/providers/StoreProvider";
import { fetchCityByLocation } from "@/lib/api/openStreetMap";
import { isNullOrUndefined } from "@/lib/common";

export const useCityByLocation = (): { refetch: () => Promise<void> } => {
  const { store, dispatch } = useStoreContext();

  const { data: location } = store.location;

  const fetchByLocation = useCallback(async () => {
    if (isNullOrUndefined(location)) {
      return;
    }
    const { lon, lat } = location;
    dispatch({ type: ACTION_TYPE.CITY_LOADING });

    const [data, error] = await fetchCityByLocation({ lon, lat });

    if (error || !data) {
      dispatch({ type: ACTION_TYPE.CITY_ERROR, payload: error });
    } else {
      dispatch({ type: ACTION_TYPE.CITY_SET, payload: data });
    }
  }, [location]);

  useEffect(() => {
    location?.lat && location.lon && fetchByLocation();
  }, [fetchByLocation, location]);

  return { refetch: fetchByLocation };
};
