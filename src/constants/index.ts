import type { ImageSourcePropType } from "react-native";

import sunny from "../../assets/sun.png";
import cloudy from "../../assets/clouds.png";
import rainy from "../../assets/rain.png";
import snowy from "../../assets/snow.png";
import thunder from "../../assets/thunder.png";

export const OPEN_METEO_API = "https://api.open-meteo.com/v1/forecast";

export const WEATHER_CODES: Record<
  string,
  {
    description: string;
    label: string;
    image: ImageSourcePropType;
  }
> = {
  "0": { label: "Sunny", description: "Clear sky", image: sunny },
  "1": {
    label: "Cloudy",
    description: "Mainly clear, partly cloudy, and overcast",
    image: cloudy,
  },
  "2": {
    label: "Cloudy",
    description: "Mainly clear, partly cloudy, and overcast",
    image: cloudy,
  },
  "3": {
    label: "Cloudy",
    description: "Mainly clear, partly cloudy, and overcast",
    image: cloudy,
  },
  "45": {
    label: "Foggy",
    description: "Fog and depositing rime fog",
    image: rainy,
  },
  "48": {
    label: "Foggy",
    description: "Fog and depositing rime fog",
    image: rainy,
  },
  "51": {
    label: "Rainy",
    description: "Drizzle: Light, moderate, and dense intensity",
    image: rainy,
  },
  "53": {
    label: "Rainy",
    description: "Drizzle: Light, moderate, and dense intensity",
    image: rainy,
  },
  "55": {
    label: "Rainy",
    description: "Drizzle: Light, moderate, and dense intensity",
    image: rainy,
  },
  "56": {
    label: "Rainy",
    description: "Freezing Drizzle: Light and dense intensity",
    image: rainy,
  },
  "57": {
    label: "Rainy",
    description: "Freezing Drizzle: Light and dense intensity",
    image: rainy,
  },
  "61": {
    label: "Rainy",
    description: "Rain: Slight, moderate and heavy intensity",
    image: rainy,
  },
  "63": {
    label: "Rainy",
    description: "Rain: Slight, moderate and heavy intensity",
    image: rainy,
  },
  "65": {
    label: "Rainy",
    description: "Rain: Slight, moderate and heavy intensity",
    image: rainy,
  },
  "66": {
    label: "Rainy",
    description: "Freezing Rain: Light and heavy intensity",
    image: rainy,
  },
  "67": {
    label: "Rainy",
    description: "Freezing Rain: Light and heavy intensity",
    image: rainy,
  },
  "71": {
    label: "Showy",
    description: "Snow fall: Slight, moderate, and heavy intensity",
    image: snowy,
  },
  "73": {
    label: "Showy",
    description: "Snow fall: Slight, moderate, and heavy intensity",
    image: snowy,
  },
  "75": {
    label: "Showy",
    description: "Snow fall: Slight, moderate, and heavy intensity",
    image: snowy,
  },
  "77": { label: "Snowy", description: "Snow grains", image: snowy },
  "80": {
    label: "Rainy",
    description: "Rain showers: Slight, moderate, and violent",
    image: rainy,
  },
  "81": {
    label: "Rainy",
    description: "Rain showers: Slight, moderate, and violent",
    image: rainy,
  },
  "82": {
    label: "Rainy",
    description: "Rain showers: Slight, moderate, and violent",
    image: rainy,
  },
  "85": {
    label: "Showy",
    description: "Snow showers slight and heavy",
    image: snowy,
  },
  "86": {
    label: "Showy",
    description: "Snow showers slight and heavy",
    image: snowy,
  },
  "95": {
    label: "Thunder",
    description: "Thunderstorm: Slight or moderate",
    image: thunder,
  },
  "96": {
    label: "Thunder",
    description: "Thunderstorm with slight and heavy hail",
    image: thunder,
  },
  "99": {
    label: "Thunder",
    description: "Thunderstorm with slight and heavy hail",
    image: thunder,
  },
};
