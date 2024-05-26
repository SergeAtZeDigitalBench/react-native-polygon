import { OPEN_METEO_API, WEATHER_CODES } from "@/constants";
import { getErrorMessage } from "@/lib/common";

import type { OpenMeteoAPIErrorResponse, OpenMeteoAPIResponse } from "@/types";

const createFullUrl = ({
  lon,
  lat,
  daily = "weathercode,temperature_2m_max,sunrise,sunset,windspeed_10m_max",
  timezone = "auto",
  currentWeather = true,
}: {
  lon: number;
  lat: number;
  daily?: string;
  timezone?: string;
  currentWeather?: boolean;
}) => {
  return `${OPEN_METEO_API}?latitude=${lat}&longitude=${lon}&daily=${daily}&timezone=${timezone}&current_weather=${currentWeather}`;
};

export class MeteoApi {
  static async fetchWeatherByCoords({
    lat,
    lon,
  }: {
    lon: number;
    lat: number;
  }): Promise<[OpenMeteoAPIResponse, null] | [null, string]> {
    try {
      const url = createFullUrl({ lat, lon });
      const res = await fetch(url);

      if (!res.ok) {
        const errorResponse = (await res.json()) as OpenMeteoAPIErrorResponse;
        throw new Error(errorResponse.reason);
      }

      const data = (await res.json()) as OpenMeteoAPIResponse;

      return [data, null];
    } catch (error) {
      return [null, getErrorMessage("Failed to fetch weather", error)];
    }
  }
}
