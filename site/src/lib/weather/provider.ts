import "server-only";

import type { WeatherLocation, WeatherReading } from "./types";

const apiOrigin = "https://api.openweathermap.org";

function record(value: unknown): Record<string, unknown> {
  if (typeof value !== "object" || value === null || Array.isArray(value) === true) {
    throw new Error("Invalid weather response.");
  }

  return value as Record<string, unknown>;
}

function number(value: unknown): number {
  if (typeof value !== "number" || Number.isFinite(value) !== true) {
    throw new Error("Invalid weather response.");
  }

  return value;
}

function optionalNumber(value: unknown): number | null {
  return value === undefined || value === null ? null : number(value);
}

function reading(value: unknown): WeatherReading {
  const data = record(value);
  const main = record(data.main);
  const wind = record(data.wind);
  const clouds = record(data.clouds ?? {});
  const sun = record(data.sys ?? {});
  const condition = record(Array.isArray(data.weather) ? data.weather[0] : undefined);

  if (
    typeof condition.description !== "string" || condition.description.length > 200 ||
    typeof condition.icon !== "string" || /^\d{2}[dn]$/.test(condition.icon) !== true
  ) {
    throw new Error("Invalid weather response.");
  }

  return {
    timestamp: number(data.dt),
    temperature: number(main.temp),
    feelsLike: number(main.feels_like),
    humidity: number(main.humidity),
    pressure: number(main.pressure),
    windSpeed: number(wind.speed),
    windDirection: optionalNumber(wind.deg),
    windGust: optionalNumber(wind.gust),
    cloudCover: optionalNumber(clouds.all),
    visibility: optionalNumber(data.visibility),
    rain: optionalNumber(record(data.rain ?? {})["1h"]),
    snow: optionalNumber(record(data.snow ?? {})["1h"]),
    sunrise: optionalNumber(sun.sunrise),
    sunset: optionalNumber(sun.sunset),
    condition: {
      id: number(condition.id),
      description: condition.description,
      icon: condition.icon,
    },
  };
}

export async function fetchCurrentWeather(
  location: WeatherLocation,
  apiKey: string,
  fetcher: typeof fetch = fetch,
): Promise<WeatherReading> {
  const url = new URL("/data/2.5/weather", apiOrigin);
  url.searchParams.set("lat", String(location.latitude));
  url.searchParams.set("lon", String(location.longitude));
  url.searchParams.set("units", "metric");
  url.searchParams.set("lang", "en");
  url.searchParams.set("appid", apiKey);

  let payload: unknown;

  try {
    const response = await fetcher(url, {
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(5000),
    });

    if (response.ok !== true) {
      throw new Error("OpenWeather request failed.");
    }

    payload = await response.json();
  } catch {
    throw new Error("OpenWeather request failed.");
  }

  return reading(payload);
}
