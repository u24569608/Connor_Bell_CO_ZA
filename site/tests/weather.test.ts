import assert from "node:assert/strict";
import { test } from "node:test";

import { GET } from "../src/app/api/weather/route";
import { fetchCurrentWeather } from "../src/lib/weather/provider";
import { weatherBackground, weatherDate, weatherHasStars, weatherTime, windDirection } from "../src/lib/weather/presentation";
import { weatherLocations } from "../src/lib/weather/types";

const apiKey = "weather-test-key";
const observedAt = Date.UTC(2026, 10, 12, 12) / 1000;

test("stars appear only for clear nights in the selected reading", async () => {
  const current = await fetchCurrentWeather(weatherLocations[0], apiKey, weatherFetcher([]));
  const night = (observedAt + 21600) * 1000;
  assert.equal(weatherHasStars(current, night), true);
  assert.equal(weatherHasStars(current, observedAt * 1000), false);
  assert.equal(weatherHasStars(null, night), false);
  for (const id of [801, 802, 803, 804, 211, 500]) {
    assert.equal(weatherHasStars({ ...current, condition: { ...current.condition, id } }, night), false);
  }
  const withoutSunTimes = { ...current, sunrise: null, sunset: null };
  assert.equal(weatherHasStars({ ...withoutSunTimes, condition: { ...current.condition, icon: "01n" } }, night), true);
  assert.equal(weatherHasStars(withoutSunTimes, night), false);
});

test("daytime themes follow the selected reading and night overrides the condition", async () => {
  const current = await fetchCurrentWeather(weatherLocations[0], apiKey, weatherFetcher([]));
  const daytime = observedAt * 1000;
  assert.equal(weatherBackground(current, daytime), "#006AFF");
  assert.equal(weatherBackground({ ...current, condition: { ...current.condition, id: 804 } }, daytime), "#8F8F8F");
  const storm = { ...current, condition: { ...current.condition, id: 211 } };
  assert.equal(weatherBackground(storm, daytime), "#2B2B4B");
  assert.equal(weatherBackground(storm, (observedAt + 21600) * 1000), "#000000");
  assert.equal(weatherBackground(current, (observedAt - 21601) * 1000), "#000000");
});

test("missing sun times use the provider day or night indication", async () => {
  const current = await fetchCurrentWeather(weatherLocations[0], apiKey, weatherFetcher([]));
  const withoutSunTimes = { ...current, sunrise: null, sunset: null };
  assert.equal(weatherBackground(withoutSunTimes, observedAt * 1000), "#006AFF");
  assert.equal(weatherBackground({ ...withoutSunTimes, condition: { ...current.condition, icon: "01n" } }, observedAt * 1000), "#000000");
  assert.equal(weatherBackground(null, 0), "#000000");
});

test("theme calculation does not read the clock during rendering", async (context) => {
  const current = await fetchCurrentWeather(weatherLocations[0], apiKey, weatherFetcher([]));
  context.mock.method(Date, "now", () => {
    throw new Error("The clock cannot be read during prerendering.");
  });
  assert.equal(weatherBackground(null, 0), "#000000");
  assert.equal(weatherBackground(current, observedAt * 1000), "#006AFF");
});

test("weather clocks use South African time for observations and cached timestamps", () => {
  assert.equal(weatherTime(observedAt), "02:00 PM");
  assert.equal(weatherTime("2026-11-12T08:00:00.000Z"), "10:00 AM");
  assert.equal(weatherTime(null), "—");
  assert.equal(weatherDate(Date.UTC(2026, 10, 12, 20, 30) / 1000), "12 November 2026");
  assert.equal(weatherDate(Date.UTC(2026, 10, 12, 22, 30) / 1000), "13 November 2026");
  assert.equal(weatherDate(null), "—");
});

test("wind bearings wrap around north and preserve missing directions", () => {
  assert.equal(windDirection(45), "NE");
  assert.equal(windDirection(359), "N");
  assert.equal(windDirection(360), "N");
  assert.equal(windDirection(null), "—");
});

function providerReading() {
  return {
    dt: observedAt,
    main: { temp: 24, feels_like: 25, humidity: 60, pressure: 1012 },
    wind: { speed: 3, deg: 120 },
    clouds: { all: 10 },
    sys: { sunrise: observedAt - 21600, sunset: observedAt + 21600 },
    visibility: 10000,
    weather: [{ id: 800, description: "clear sky", icon: "01d" }],
  };
}

function weatherFetcher(requests: URL[]): typeof fetch {
  return async (input, options) => {
    const url = new URL(String(input));
    requests.push(url);
    assert.equal(url.origin, "https://api.openweathermap.org");
    assert.equal(url.pathname, "/data/2.5/weather");
    assert.equal(url.searchParams.get("appid"), apiKey);
    assert.equal(url.searchParams.get("units"), "metric");
    assert.equal(options?.redirect, "error");
    assert.equal(options?.cache, "no-store");

    return Response.json({ ...providerReading(), unselected: apiKey });
  };
}

test("unknown locations cannot trigger an outbound request", async (context) => {
  const outbound = context.mock.method(globalThis, "fetch", async () => {
    throw new Error("An unknown location caused an outbound request.");
  });
  const response = await GET(new Request("https://example.com/api/weather?location=elsewhere&lat=0&lon=0"));
  assert.equal(response.status, 404);
  assert.equal(outbound.mock.callCount(), 0);
});

test("current readings include selected fields without the API key", async () => {
  const requests: URL[] = [];
  const current = await fetchCurrentWeather(weatherLocations[0], apiKey, weatherFetcher(requests));
  assert.equal(current.temperature, 24);
  assert.equal(current.feelsLike, 25);
  assert.equal(current.windSpeed, 3);
  assert.equal(current.cloudCover, 10);
  assert.equal(current.sunrise, observedAt - 21600);
  assert.equal(current.rain, null);
  assert.equal(JSON.stringify(current).includes(apiKey), false);
});

test("each city uses one request with its fixed coordinates", async () => {
  const requests: URL[] = [];
  await Promise.all(weatherLocations.map((location) => fetchCurrentWeather(location, apiKey, weatherFetcher(requests))));
  assert.equal(requests.length, 2);
  assert.deepEqual(
    requests.map((url) => [url.searchParams.get("lat"), url.searchParams.get("lon")]),
    weatherLocations.map((location) => [String(location.latitude), String(location.longitude)]),
  );
});

test("absent optional observations are represented as null", async () => {
  const fetcher: typeof fetch = async () => Response.json({
    ...providerReading(), clouds: undefined, sys: undefined, wind: { speed: 0 },
  });
  const current = await fetchCurrentWeather(weatherLocations[0], apiKey, fetcher);
  assert.equal(current.windDirection, null);
  assert.equal(current.windGust, null);
  assert.equal(current.cloudCover, null);
  assert.equal(current.sunrise, null);
});

test("malformed weather is rejected", async () => {
  const fetcher: typeof fetch = async () => Response.json({ main: { temp: "not-a-number" } });
  await assert.rejects(fetchCurrentWeather(weatherLocations[0], apiKey, fetcher), /Invalid weather response/);
});

test("failed provider responses are rejected", async () => {
  const fetcher: typeof fetch = async () => Response.json({ message: apiKey }, { status: 401 });
  await assert.rejects(fetchCurrentWeather(weatherLocations[0], apiKey, fetcher), /^Error: OpenWeather request failed\.$/);
});

test("network errors cannot expose credential-bearing URLs", async () => {
  const fetcher: typeof fetch = async (input) => {
    throw new Error(`Network failure for ${String(input)}`);
  };
  await assert.rejects(fetchCurrentWeather(weatherLocations[0], apiKey, fetcher), (error: Error) => {
    assert.equal(error.message, "OpenWeather request failed.");
    assert.equal(String(error.stack).includes(apiKey), false);
    return true;
  });
});
