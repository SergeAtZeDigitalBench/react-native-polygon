import { useState, useEffect, useCallback, useRef } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
  type LocationObject,
} from "expo-location";

import type { FetchState } from "@/types";

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
 * @returns tuple of 2 fetch state and refetch fn
 */
export const useUserLocation = (): [
  FetchState<Record<"lat" | "lon", number>>,
  () => Promise<void>,
] => {
  const [state, setState] = useState<FetchState<Record<"lat" | "lon", number>>>(
    {
      data: null,
      isLoading: false,
      error: null,
    },
  );

  const mountedRef = useRef<boolean>(true);

  const fetchUserCoordinates = useCallback(async () => {
    setState((current) => ({ ...current, isLoading: true }));
    const [data, error] = await getUserCoordinates();
    mountedRef.current && setState({ data, error, isLoading: false });
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    fetchUserCoordinates();

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return [state, fetchUserCoordinates];
};
