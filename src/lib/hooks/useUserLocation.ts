import { useCallback, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import { useStoreContext } from "@/providers/StoreProvider";
import { ACTION_TYPE } from "@/types";
import { getErrorMessage } from "../common";

const getUserCoordinates = async (): Promise<
  [Record<"lat" | "lon", number>, null] | [null, string]
> => {
  try {
    const { status, ...rest } = await requestForegroundPermissionsAsync();

    if (status !== "granted") {
      throw new Error("Location request denied by user");
    }

    const result = await getCurrentPositionAsync();
    const { latitude: lat, longitude: lon } = result.coords;
    return [{ lat, lon }, null];
  } catch (error) {
    return [null, getErrorMessage("Failed to get user coordinates", error)];
  }
};

/**
 * @description getting user location
 * @returns refetch coordinates fn
 */
export const useUserLocation = (): { refetch: () => Promise<void> } => {
  const { dispatch } = useStoreContext();

  const fetchUserCoordinates = useCallback(async () => {
    dispatch({ type: ACTION_TYPE.LOCATION_LOADING });

    const [data, error] = await getUserCoordinates();

    if (error || !data) {
      dispatch({ type: ACTION_TYPE.LOCATION_ERROR, payload: error });
    } else {
      dispatch({ type: ACTION_TYPE.LOCATION_SET, payload: data });
    }
  }, []);

  useEffect(() => {
    fetchUserCoordinates();
  }, []);

  return { refetch: fetchUserCoordinates };
};
