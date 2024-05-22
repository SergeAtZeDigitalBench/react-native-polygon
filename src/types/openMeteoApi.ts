/**
 * @description In case an error occurs, for example a URL parameter is not correctly specified,
 * a JSON error object is returned with a HTTP 400 status code.
 */
export type OpenMeteoAPIErrorResponse = {
  error: boolean;
  reason: string;
};

export interface WeatherUnits {
  time: string;
  interval: string;
  temperature: string;
  windspeed: string;
  winddirection: string;
  is_day: string;
  weathercode: string;
}

export interface DailyUnits {
  time: string;
  weathercode: string;
  temperature_2m_max: string;
  sunrise: string;
  sunset: string;
  wind_speed_10m_max: string;
}

export interface WeatherInfo {
  time: string;
  interval: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
}

export interface PerDayInfo {
  time: string[];
  weathercode: number[];
  temperature_2m_max: number[];
  sunrise: string[];
  sunset: string[];
  wind_speed_10m_max: number[];
}

export interface OpenMeteoAPIResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_weather_units: WeatherUnits;
  current_weather: WeatherInfo;
  daily_units: DailyUnits;
  daily: PerDayInfo;
}
