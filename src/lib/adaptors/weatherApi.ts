import type { OpenMeteoAPIResponse } from "@/types";

import { WEATHER_CODES } from "@/constants";

const getWeather = (code: number) => WEATHER_CODES[code.toString()];

export const formatWeatherPayload = (payload: OpenMeteoAPIResponse) => {
  const { current_weather, daily, ...rest } = payload;

  return {
    ...rest,
    current_weather: {
      ...current_weather,
      weathercode: getWeather(current_weather.weathercode),
    },
    daily: {
      ...daily,
      weathercode: daily.weathercode.map((code) => getWeather(code)),
    },
  };
};
