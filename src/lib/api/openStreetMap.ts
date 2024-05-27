import type {
  OpenStreetMapApiPayload,
  OpenStreetMapApiErrorPayload,
  Address,
} from "@/types";

import { OPEN_STREET_MAP_API } from "@/constants";
import { getErrorMessage } from "../common";

const defaultErr = "Failed to fetch city by location";

const getLocationName = (address: Address) => {
  const { country, city, state, town, borough, village, suburb } = address;
  if (city) return city;
  if (town) return town;
  if (borough) return borough;
  if (village) return village;
  if (suburb) return suburb;
  if (state) return state;
  return country;
};

export const fetchCityByLocation = async ({
  lon,
  lat,
}: Record<"lon" | "lat", number>): Promise<[string, null] | [null, string]> => {
  try {
    const url = `${OPEN_STREET_MAP_API}/reverse?lat=${lat}&lon=${lon}&format=json`;

    const res = await fetch(url);

    if (!res.ok) {
      const errorResponse = (await res.json()) as OpenStreetMapApiErrorPayload;
      throw new Error(
        errorResponse.error?.message || `${res.statusText}: ${defaultErr}`,
      );
    }

    const data = (await res.json()) as OpenStreetMapApiPayload;

    if (data.error) {
      throw new Error(data.error);
    }

    return [getLocationName(data.address), null];
  } catch (error) {
    return [null, getErrorMessage(defaultErr, error)];
  }
};
