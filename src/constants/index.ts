export const OPEN_METEO_API = "https://api.open-meteo.com/v1/forecast";

export const WEATHER_CODES = {
  "0": { description: "Clear sky", icon: "" },
  "1": { description: "Mainly clear, partly cloudy, and overcast", icon: "" },
  "2": { description: "Mainly clear, partly cloudy, and overcast", icon: "" },
  "3": { description: "Mainly clear, partly cloudy, and overcast", icon: "" },
  "45": { description: "Fog and depositing rime fog", icon: "" },
  "48": { description: "Fog and depositing rime fog", icon: "" },
  "51": {
    description: "Drizzle: Light, moderate, and dense intensity",
    icon: "",
  },
  "53": {
    description: "Drizzle: Light, moderate, and dense intensity",
    icon: "",
  },
  "55": {
    description: "Drizzle: Light, moderate, and dense intensity",
    icon: "",
  },
  "56": {
    description: "Freezing Drizzle: Light and dense intensity",
    icon: "",
  },
  "57": {
    description: "Freezing Drizzle: Light and dense intensity",
    icon: "",
  },
  "61": { description: "Rain: Slight, moderate and heavy intensity", icon: "" },
  "63": { description: "Rain: Slight, moderate and heavy intensity", icon: "" },
  "65": { description: "Rain: Slight, moderate and heavy intensity", icon: "" },
  "66": { description: "Freezing Rain: Light and heavy intensity", icon: "" },
  "67": { description: "Freezing Rain: Light and heavy intensity", icon: "" },
  "71": {
    description: "Snow fall: Slight, moderate, and heavy intensity",
    icon: "",
  },
  "73": {
    description: "Snow fall: Slight, moderate, and heavy intensity",
    icon: "",
  },
  "75": {
    description: "Snow fall: Slight, moderate, and heavy intensity",
    icon: "",
  },
  "77": { description: "Snow grains", icon: "" },
  "80": {
    description: "Rain showers: Slight, moderate, and violent",
    icon: "",
  },
  "81": {
    description: "Rain showers: Slight, moderate, and violent",
    icon: "",
  },
  "82": {
    description: "Rain showers: Slight, moderate, and violent",
    icon: "",
  },
  "85": { description: "Snow showers slight and heavy", icon: "" },
  "86": { description: "Snow showers slight and heavy", icon: "" },
  "95": { description: "Thunderstorm: Slight or moderate", icon: "" },
  "96": { description: "Thunderstorm with slight and heavy hail", icon: "" },
  "99": { description: "Thunderstorm with slight and heavy hail", icon: "" },
} as const;
