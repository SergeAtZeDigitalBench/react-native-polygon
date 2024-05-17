import { Unit } from "../types";

export const NUMERIC_REGEX = /^-?\d*\.?\d*$/;

export const isNumeric = (value: string) => NUMERIC_REGEX.test(value);

const roundTheNumber = (temperature: number) => {
  const isFloat = temperature > Math.floor(temperature);

  if (!isFloat) return temperature;

  return parseFloat(temperature.toFixed(1));
};

const conversion = {
  celsiusToFahrenheit: (c: number) => roundTheNumber(c * 1.8 + 32),
  fahrenheitToCelsius: (f: number) => roundTheNumber((f - 32) * 0.55),
};

export const convert = (temperature: string, unit: Unit) => {
  if (!isNumeric(temperature)) return null;

  const tempNumber = Number(temperature);

  if (unit === Unit.C) {
    return conversion.celsiusToFahrenheit(tempNumber);
  }

  return conversion.fahrenheitToCelsius(tempNumber);
};

export const reverseUnit = (unit: Unit) => (unit === Unit.C ? Unit.F : Unit.C);

export const isWeatherWarm = (temperature: string, unit: Unit) => {
  if (!isNumeric(temperature)) return true;

  if (unit === Unit.C) {
    return Number(temperature) >= 0;
  }

  return Number(temperature) >= 32;
};
