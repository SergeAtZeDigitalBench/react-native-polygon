export * from "./openStreetMapApi";
export * from "./openMeteoApi";

import type { OpenMeteoAPIResponse } from "./openMeteoApi";

export type FetchState<D> = {
  data: D | null;
  isLoading: boolean;
  error: null | string;
};

export interface Store {
  weather: FetchState<OpenMeteoAPIResponse>;
  city: FetchState<string>;
  location: FetchState<{ lon: number; lat: number }>;
}

export enum ACTION_TYPE {
  LOCATION_LOADING = "location loading",
  LOCATION_ERROR = "location error",
  LOCATION_SET = "location set",
  WEATHER_LOADING = "weather loading",
  WEATHER_ERROR = "weather error",
  WEATHER_SET = "weatehr set",
  CITY_LOADING = "city loading",
  CITY_ERROR = "city error",
  CITY_SET = "city set",
}

export interface Action<P = any> {
  type: ACTION_TYPE;
  payload?: P;
}
