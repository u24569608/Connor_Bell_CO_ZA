import type { WeatherReading } from "./types";

export function weatherBackground(weather: WeatherReading | null, now: number) {
  if (weather === null) {
    return "#000000";
  }

  const seconds = now / 1000;
  const night = weather.sunrise !== null && weather.sunset !== null
    ? seconds < weather.sunrise || seconds >= weather.sunset
    : weather.condition.icon.endsWith("n");

  if (night === true) {
    return "#000000";
  }

  if (weather.condition.id >= 200 && weather.condition.id < 300) {
    return "#2B2B4B";
  }

  return weather.condition.id >= 800 && weather.condition.id <= 802 ? "#006AFF" : "#8F8F8F";
}

export function weatherTime(timestamp: number | string | null) {
  if (timestamp === null) {
    return "—";
  }

  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Africa/Johannesburg",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(typeof timestamp === "number" ? timestamp * 1000 : timestamp));
}

export function weatherDate(timestamp: number | null) {
  if (timestamp === null) {
    return "—";
  }

  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Johannesburg",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(timestamp * 1000));
}

export function windDirection(degrees: number | null) {
  if (degrees === null) {
    return "—";
  }

  const directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

  return directions[Math.round(((degrees % 360 + 360) % 360) / 22.5) % directions.length];
}
