import { WEATHER_CODES } from "@/constants";

export const getWeatherInterpretation = (code: number) =>
  WEATHER_CODES[code.toString()];
