import "server-only";

import { cacheLife } from "next/cache";

import { fetchCurrentWeather } from "./provider";
import type { CurrentWeather, WeatherLocation } from "./types";

export async function getCurrentWeather(location: WeatherLocation): Promise<CurrentWeather> {
  "use cache: remote";

  cacheLife({ stale: 0, expire: 600 });

  const apiKey = process.env.OPENWEATHER_API_KEY?.trim();

  if (typeof apiKey !== "string" || apiKey.length === 0) {
    throw new Error("Weather is not configured.");
  }

  const data = await fetchCurrentWeather(location, apiKey);

  return { updatedAt: new Date().toISOString(), data };
}
