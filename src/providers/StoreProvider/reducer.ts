import { type Store, type Action, ACTION_TYPE } from "@/types";

import { getInitFetchState } from "@/lib/common";

const {
  LOCATION_LOADING,
  LOCATION_ERROR,
  LOCATION_SET,
  WEATHER_LOADING,
  WEATHER_ERROR,
  WEATHER_SET,
  CITY_LOADING,
  CITY_ERROR,
  CITY_SET,
} = ACTION_TYPE;

export const INITIAL_STORE: Store = {
  weather: getInitFetchState(),
  city: getInitFetchState(),
  location: getInitFetchState(),
};

export const reducer = (state: Store, action: Action): Store => {
  switch (action.type) {
    case LOCATION_LOADING:
      return { ...state, location: { ...state.location, isLoading: true } };

    case LOCATION_ERROR:
      return {
        ...state,
        location: {
          ...state.location,
          isLoading: false,
          error: action.payload as string,
        },
      };

    case LOCATION_SET:
      return {
        ...state,
        location: {
          error: null,
          isLoading: false,
          data: action.payload as Store["location"]["data"],
        },
      };

    case WEATHER_LOADING:
      return { ...state, weather: { ...state.weather, isLoading: true } };

    case WEATHER_ERROR:
      return {
        ...state,
        weather: {
          ...state.weather,
          isLoading: false,
          error: action.payload as string,
        },
      };

    case WEATHER_SET:
      return {
        ...state,
        weather: {
          error: null,
          isLoading: false,
          data: action.payload as Store["weather"]["data"],
        },
      };

    case CITY_LOADING:
      return { ...state, city: { ...state.city, isLoading: true } };

    case CITY_ERROR:
      return {
        ...state,
        city: {
          ...state.city,
          isLoading: false,
          error: action.payload as string,
        },
      };

    case CITY_SET:
      return {
        ...state,
        city: { isLoading: false, error: null, data: action.payload as string },
      };

    default:
      throw new Error(`Unknown action type: "${action.type}"`);
  }
};
